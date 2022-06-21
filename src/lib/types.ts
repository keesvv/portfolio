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
