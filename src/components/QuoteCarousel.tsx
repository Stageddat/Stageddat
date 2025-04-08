import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

interface Quote {
	text: string;
	author: string;
	image: string;
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
				}),
			]}
			className="w-full max-w-4xl mx-auto"
		>
			<CarouselContent>
				{quotes.map((quote, index) => (
					<CarouselItem key={index}>
						<div className="flex flex-col md:flex-row gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
							<div className="w-full md:w-1/3 flex items-center justify-center">
								<div className="relative w-48 h-48 rounded-full overflow-hidden">
									<img
										src={quote.image}
										alt={quote.author}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<div className="w-full md:w-2/3 flex flex-col justify-center">
								<blockquote className="text-xl md:text-2xl font-light italic text-gray-800 mb-6 leading-relaxed">
									"{quote.text}"
								</blockquote>
								<cite className="block text-right text-gray-600 font-medium">
									— {quote.author}
								</cite>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:flex" />
			<CarouselNext className="hidden md:flex" />
		</Carousel>
	);
}