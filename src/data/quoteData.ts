import type { ImageMetadata } from "astro";

import baityImg from "src/assets/authors/baity.jpeg";
import arthurImg from "src/assets/authors/arthur.jpg";
import ryoImg from "src/assets/authors/ryo.jpg";

export interface QuoteData {
  text: string;
  author: string;
  image: ImageMetadata;
  subtitle?: string;
  spoiler?: boolean;
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
    spoiler: true,
    image: arthurImg,
  },
  {
    text: "Take a gamble that love exists, and do a loving act.",
    subtitle: "",
    author: "S. Calderón to Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg,
  },
  {
    text: "A mover las manitas.",
    subtitle: "",
    author: "Miguel Ángel Durán - midudev",
    image: arthurImg,
  },
  {
    text: "I guess...I'm afraid",
    subtitle: "",
    author: "Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg,
  },
  {
    text: "I gave you all I had. I did.",
    subtitle: "",
    author: "Arthur Morgan to Dutch from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg,
  },
  {
    text: "Sorry, wish we could go to the moon together.",
    subtitle: "",
    author: "David Martínez to Lucy from Cyberpunk: Edgerunners",
    spoiler: true,
    image: arthurImg,
  },
  {
    text: "Your life isn't always gonna be this perfect, things happen to people.",
    subtitle: "",
    author: "John from Road 96",
    image: arthurImg,
  },
  {
    text: "You can't live your life in fear.",
    subtitle: "",
    author: "Sonya Sanchez from Road 96",
    image: arthurImg,
  },
  {
    text: "Life is full of pain, but there is also love and beauty.",
    subtitle: "",
    author: "S. Calderón to Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg,
  },
];
