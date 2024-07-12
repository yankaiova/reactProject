export interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  tags: string[];
  thumbnail: string;
  description: string;
  price: number;
  rating: number;
}
export interface ProductFromApi {
  products: Product[];
  total: number;
  limit: number;
}
