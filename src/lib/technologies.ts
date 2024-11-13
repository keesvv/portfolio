import type { Technology } from "./types";

import rustImg from "../assets/technologies/rust.svg";
import goImg from "../assets/technologies/go.svg";
import pythonImg from "../assets/technologies/python.svg";
import tsImg from "../assets/technologies/typescript.svg";
import nestImg from "../assets/technologies/nestjs.svg";
import svelteImg from "../assets/technologies/svelte.svg";
import vueImg from "../assets/technologies/vue.svg";
import tailwindImg from "../assets/technologies/tailwind.svg";

export const Rust: Technology = { name: "Rust", img: rustImg };
export const Go: Technology = { name: "Go", img: goImg };
export const Python: Technology = {
  name: "Python",
  img: pythonImg,
};

export const TypeScript: Technology = {
  name: "TypeScript",
  img: tsImg,
};
export const NestJS: Technology = { name: "NestJS", img: nestImg };
export const Svelte: Technology = { name: "Svelte", img: svelteImg };
export const Vue: Technology = { name: "Vue", img: vueImg };
export const Tailwind: Technology = {
  name: "Tailwind",
  img: tailwindImg,
};
