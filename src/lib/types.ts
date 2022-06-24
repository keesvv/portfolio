import { setContext } from "svelte";
import { writable, Writable } from "svelte/store";

export type SrcAlt = [string, string];

export type Technology = {
  name: string;
  img: string;
  size?: number;
};

export type Skill = {
  caption: string;
  description: string;
  icon: SrcAlt;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: Technology[];
  logo?: SrcAlt;
};

export type TypingContext = Writable<boolean>;

export function initializeTC(ctx: symbol): void {
  setContext<TypingContext>(ctx, writable(false));
}
