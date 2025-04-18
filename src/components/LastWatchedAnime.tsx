import { Image } from 'astro:assets';
import { useState, useEffect } from 'react';

interface AnimeMediaTitle {
	romaji: string;
}

interface AnimeCoverImage {
	large: string;
}

interface AnimeMedia {
	id: number;
	title: AnimeMediaTitle;
	coverImage: AnimeCoverImage;
	episodes: number | null;
}

interface AnimeCompletedAt {
	year: number | null;
	month: number | null;
	day: number | null;
}

interface AnimeEntry {
	media: AnimeMedia;
	status: string;
	progress: number;
	score: number | null;
	updatedAt: number;
	completedAt: AnimeCompletedAt;
}

interface AnimeList {
	name: string;
	entries: AnimeEntry[];
}

interface MediaListCollection {
	lists: AnimeList[];
}

interface AnilistResponse {
	data: {
		MediaListCollection: MediaListCollection;
	};
	errors?: Array<{ message: string }>;
}

interface ProcessedAnime {
	id: number;
	title: string;
	coverImage: string;
	status: string;
	progress: number;
	totalEpisodes: number | null;
	score: number | null;
	completedAt: string | null;
	lastUpdated: string;
}

interface AnimeData {
	user: string;
	updatedAnime: ProcessedAnime[];
}

interface LastWatchedAnimeProps {
	limit?: number;
}

function OptimizedAnimeImage({ src, alt }: { src: string; alt: string }) {
	return (
		<img
			src={src}
			alt={alt}
			width={192}
			height={288}
			loading="lazy"
			decoding="async"
			className="w-full h-full object-cover"
		/>
	);
}

export default function LastWatchedAnime({ limit = 3 }: LastWatchedAnimeProps) {
	const [animeList, setAnimeList] = useState<ProcessedAnime[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAnimeList = async () => {
			try {
				setLoading(true);
				const result = await getAnimeLists();

				if (result && result.updatedAnime) {
					setAnimeList(result.updatedAnime.slice(0, limit));
				} else {
					throw new Error('failed fetching anime data');
				}
			} catch (err) {
				console.error('error loading animes:', err);
				setError('failed loading animes :c');
			} finally {
				setLoading(false);
			}
		};

		fetchAnimeList();
	}, [limit]);

	async function getAnimeLists(): Promise<AnimeData | null> {
		const query = `
      query {
        MediaListCollection(userName: "Stageddat", type: ANIME, status_in: [CURRENT, COMPLETED], sort: [UPDATED_TIME_DESC]) {
          lists {
            name
            entries {
              media {
                id
                title {
                  romaji
                }
                coverImage {
                  large
                }
                episodes
              }
              status
              progress
              score
              updatedAt
              completedAt {
                year
                month
                day
              }
            }
          }
        }
      }
    `;

		try {
			const response = await fetch("https://graphql.anilist.co", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query }),
			});

			const result = await response.json() as AnilistResponse;

			if (result.errors) {
				console.error("Errors:", result.errors);
				return null;
			}

			const allEntries = result.data.MediaListCollection.lists
				.flatMap((list: AnimeList) => list.entries)
				.sort((a: AnimeEntry, b: AnimeEntry) => b.updatedAt - a.updatedAt)
				.map((entry: AnimeEntry) => ({
					id: entry.media.id,
					title: entry.media.title.romaji,
					coverImage: entry.media.coverImage.large,
					status: entry.status,
					progress: entry.progress,
					totalEpisodes: entry.media.episodes,
					score: entry.score || null,
					completedAt: entry.completedAt && entry.completedAt.year
						? `${entry.completedAt.year}-${entry.completedAt.month
							?.toString()
							.padStart(2, "0")}-${entry.completedAt.day
								?.toString()
								.padStart(2, "0")}`
						: null,
					lastUpdated: new Date(entry.updatedAt * 1000).toISOString(),
				}));

			return {
				user: "Stageddat",
				updatedAnime: allEntries,
			};
		} catch (error) {
			console.error("Fetch error:", error);
			return null;
		}
	}

	const formatStatus = (status: string): string => {
		switch (status) {
			case "CURRENT":
				return "Watching";
			case "COMPLETED":
				return "Completed";
			case "PLANNING":
				return "Plan to Watch";
			case "DROPPED":
				return "Dropped";
			case "PAUSED":
				return "On Hold";
			default:
				return status;
		}
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-72">
				<p className="text-xl">loading animes...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-72">
				<p className="text-xl text-red-500">{error}</p>
			</div>
		);
	}

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{animeList.map((anime) => (
				<div
					key={anime.id}
					className="w-48 transition-transform duration-300 hover:scale-105"
				>
					<a
						href={`https://anilist.co/anime/${anime.id}/`}
						target="_blank"
						rel="noopener noreferrer"
						className="block"
					>
						<div className="h-72 rounded-lg overflow-hidden shadow-lg mb-2">
							<OptimizedAnimeImage
								src={anime.coverImage}
								alt={anime.title}
							/>
						</div>
						<h3 className="text-sm font-medium text-center line-clamp-1 hover:text-blue-500" title={anime.title}>
							{anime.title}
						</h3>
						<div className="text-xs text-center text-gray-600">
							<span className="font-semibold">{formatStatus(anime.status)}</span>
							{anime.status === "CURRENT" && anime.totalEpisodes && (
								<span> • {anime.progress}/{anime.totalEpisodes}</span>
							)}
							{anime.status === "CURRENT" && !anime.totalEpisodes && (
								<span> • {anime.progress}/??</span>
							)}
						</div>
					</a>
				</div>
			))}
		</div>
	);
}