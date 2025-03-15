export interface itemTable {
  id: number;
  name: string;
  image: string;
  code: string;
  description: string;
  category: {
    brand: string;
    id: number;
  }
  price: number;
  quantity: number;
}