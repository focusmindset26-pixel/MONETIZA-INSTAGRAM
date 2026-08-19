export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  samples: string[];
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
