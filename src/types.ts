export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  mainBenefit?: string;
  desc: string;
  eliminates?: string;
  transformation?: { from: string; to: string };
  samples: string[];
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
