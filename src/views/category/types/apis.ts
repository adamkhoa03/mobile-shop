export interface categoryItem {
  brand: string;
  code: string;
  status: number;
  description: string;

  [key: string]: unknown;
}

export interface itemTable {
  id: number;
  brand: string;
  status: number;
}
