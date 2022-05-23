export type repoType = {
  id: string;
  name: string;
  language: string;
  description?: string;
  url: string;
  starred: boolean;
};

export type Card = {
  id: string;
  name: string;
};

export type ColumnType = {
  id: string;
  name: string;
  cards: Card[];
};

export type InitialStateType = {
  columns: ColumnType[];
  repos: repoType[];
  total_count: number;
};

export const initState: InitialStateType = {
  columns: [],
  repos: [],
  total_count: 0,
};
