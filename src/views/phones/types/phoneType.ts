export interface itemTable {
  id: number;
  name: string;
  image: string;
  code: string;
  description: string;
  category: {
    brand: string;
    id: number;
  };
  price: number;
  quantity: number;
}

export interface phoneItem {
  name: string;
  code: string;
  description: string | null;
  price: number;
  quantity: number;
  category: {
    brand: string;
    id: number;
  };
}
