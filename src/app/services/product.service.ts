import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Modern Grey Linen Sofa',
      description: 'Elegant and comfortable grey linen sofa with premium cushioning and solid wood legs',
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 13999,
      rating: 4.5,
      reviewCount: 128,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This modern sofa combines style with comfort, featuring high-density foam cushions and premium linen upholstery.',
      specifications: {
        dimensions: '220cm x 95cm x 85cm',
        material: 'Linen, Solid Wood',
        color: 'Grey',
        weight: '45kg'
      }
    },
    {
      id: 2,
      name: 'Classic Brown Leather Armchair',
      description: 'Premium leather armchair with traditional design and exceptional comfort',
      price: 8999,
      imageUrl: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.8,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Handcrafted with genuine leather and featuring classic button-tufted design.',
      specifications: {
        dimensions: '90cm x 85cm x 95cm',
        material: 'Genuine Leather, Hardwood',
        color: 'Brown',
        weight: '35kg'
      }
    },
    {
      id: 3,
      name: 'Contemporary Black Sectional',
      description: 'Modern L-shaped sectional sofa with adjustable headrests',
      price: 19999,
      imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: false,
      salePrice: 17999,
      rating: 4.3,
      reviewCount: 156,
      images: [
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This sectional features modular design with premium upholstery and adjustable components.',
      specifications: {
        dimensions: '320cm x 180cm x 85cm',
        material: 'Premium Fabric, Steel',
        color: 'Black',
        weight: '85kg'
      }
    },
    {
      id: 4,
      name: 'Modern Grey Linen Sofa',
      description: 'Elegant and comfortable grey linen sofa with premium cushioning and solid wood legs',
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 13999,
      rating: 4.5,
      reviewCount: 128,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This modern sofa combines style with comfort, featuring high-density foam cushions and premium linen upholstery.',
      specifications: {
        dimensions: '220cm x 95cm x 85cm',
        material: 'Linen, Solid Wood',
        color: 'Grey',
        weight: '45kg'
      }
    },
    {
      id: 5,
      name: 'Classic Brown Leather Armchair',
      description: 'Premium leather armchair with traditional design and exceptional comfort',
      price: 8999,
      imageUrl: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.8,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Handcrafted with genuine leather and featuring classic button-tufted design.',
      specifications: {
        dimensions: '90cm x 85cm x 95cm',
        material: 'Genuine Leather, Hardwood',
        color: 'Brown',
        weight: '35kg'
      }
    },
    {
      id: 6,
      name: 'Contemporary Black Sectional',
      description: 'Modern L-shaped sectional sofa with adjustable headrests',
      price: 19999,
      imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: false,
      salePrice: 17999,
      rating: 4.3,
      reviewCount: 156,
      images: [
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This sectional features modular design with premium upholstery and adjustable components.',
      specifications: {
        dimensions: '320cm x 180cm x 85cm',
        material: 'Premium Fabric, Steel',
        color: 'Black',
        weight: '85kg'
      }
    },
    {
      id: 7,
      name: 'Contemporary Black Sectional',
      description: 'Modern L-shaped sectional sofa with adjustable headrests',
      price: 19999,
      imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: false,
      salePrice: 17999,
      rating: 4.3,
      reviewCount: 156,
      images: [
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This sectional features modular design with premium upholstery and adjustable components.',
      specifications: {
        dimensions: '320cm x 180cm x 85cm',
        material: 'Premium Fabric, Steel',
        color: 'Black',
        weight: '85kg'
      }
    },
    {
      id: 8,
      name: 'Modern Grey Linen Sofa',
      description: 'Elegant and comfortable grey linen sofa with premium cushioning and solid wood legs',
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 13999,
      rating: 4.5,
      reviewCount: 128,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This modern sofa combines style with comfort, featuring high-density foam cushions and premium linen upholstery.',
      specifications: {
        dimensions: '220cm x 95cm x 85cm',
        material: 'Linen, Solid Wood',
        color: 'Grey',
        weight: '45kg'
      }
    },
    {
      id: 9,
      name: 'Classic Brown Leather Armchair',
      description: 'Premium leather armchair with traditional design and exceptional comfort',
      price: 8999,
      imageUrl: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.8,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Handcrafted with genuine leather and featuring classic button-tufted design.',
      specifications: {
        dimensions: '90cm x 85cm x 95cm',
        material: 'Genuine Leather, Hardwood',
        color: 'Brown',
        weight: '35kg'
      }
    },
    {
      id: 10,
      name: 'Modern Grey Linen Sofa',
      description: 'Elegant and comfortable grey linen sofa with premium cushioning and solid wood legs',
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 13999,
      rating: 4.5,
      reviewCount: 128,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This modern sofa combines style with comfort, featuring high-density foam cushions and premium linen upholstery.',
      specifications: {
        dimensions: '220cm x 95cm x 85cm',
        material: 'Linen, Solid Wood',
        color: 'Grey',
        weight: '45kg'
      }
    },
    {
      id: 11,
      name: 'Classic Brown Leather Armchair',
      description: 'Premium leather armchair with traditional design and exceptional comfort',
      price: 8999,
      imageUrl: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.8,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Handcrafted with genuine leather and featuring classic button-tufted design.',
      specifications: {
        dimensions: '90cm x 85cm x 95cm',
        material: 'Genuine Leather, Hardwood',
        color: 'Brown',
        weight: '35kg'
      }
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}