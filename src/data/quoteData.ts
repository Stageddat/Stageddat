import type { ImageMetadata } from "astro";

import baityImg from "src/assets/authors/baity.jpeg";
import arthurImg from "src/assets/authors/arthur.jpg";
import ryoImg from "src/assets/authors/ryo.jpg";

export interface QuoteData {
  text: string;
  author: string;
  image: ImageMetadata;
  subtitle?: string;
}

export const quotes: QuoteData[] = [
  {
    text: "i have no money",
    subtitle: "",
    author: "Ryo Yamada from Bocchi The Rock!",
    image: ryoImg,
  },
  {
    text: "espabila coño, que la vida te va a comer",
    subtitle: "wake the fuck up, life's gonna eat you alive",
    author: "BaityBait",
    image: baityImg,
  },
  {
    text: "There is nothing to be afraid of, Mr. Morgan.",
    subtitle: "",
    author: "S. Calderón to Arthur Morgan from Red Dead Redemption 2",
    image: arthurImg,
  },
];
