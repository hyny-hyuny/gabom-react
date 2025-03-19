export interface Summary {
  label: string;
  count: number;
}

export type SummaryList = Summary[];

export type MyPageTabSearchParam =
  | 'review'
  | 'place'
  | 'bookmark'
  | 'reservation';
