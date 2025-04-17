// src/components/QuoteCarousel.tsx
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import type { ImageMetadata } from "astro";

interface Quote {
	text: string;
	author: string;
	image: ImageMetadata;
	subtitle?: string;
}

interface QuoteCarouselProps {
	quotes: Quote[];
}

export default function QuoteCarousel({ quotes }: QuoteCarouselProps) {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 5000,
					stopOnInteraction: true,
				}),
			]}
			opts={{
				loop: true,
			}}
			className="w-full max-w-4xl mx-auto font-['Montserrat']"
		>
			<CarouselContent>
				{quotes.map((quote, index) => (
					<CarouselItem key={index}>
						<div className="flex flex-col md:flex-row gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100 h-[400px] md:h-[300px]">
							<div className="w-full md:w-1/3 flex items-center justify-center shrink-0">
								<div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md">
									<img
										src={quote.image.src}
										width={quote.image.width}
										height={quote.image.height}
										alt={`Portrait of ${quote.author}`}
										loading="lazy"
										decoding="async"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<div className="w-full md:w-2/3 flex flex-col justify-center overflow-y-auto">
								<blockquote className="text-xl md:text-3xl font-normal italic text-gray-800 mb-2 leading-relaxed">
									"{quote.text}"
								</blockquote>
								{quote.subtitle && (
									<p className="text-lg text-gray-500 mb-2">
										{quote.subtitle}
									</p>
								)}
								<cite className="text-base block text-right text-gray-600 font-medium">
									— {quote.author}
								</cite>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:flex text-gray-700 hover:text-indigo-600 transition-colors" />
			<CarouselNext className="hidden md:flex text-gray-700 hover:text-indigo-600 transition-colors" />
		</Carousel>
	);
}