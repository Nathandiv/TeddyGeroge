export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  onSale: boolean;
  available: boolean;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  details: string;
  specifications: {
    dimensions: string;
    material: string;
    color: string;
    weight: string;
  };
}