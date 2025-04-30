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
      name: 'Modern Oak Bedroom Headboard',
      description: 'Sleek and minimalistic headboard crafted from high-quality oak wood with a smooth finish',
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1600566752759-76dc0fabc9b6?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 13999,
      rating: 4.5,
      reviewCount: 128,
      images: [
        'https://images.unsplash.com/photo-1600566752759-76dc0fabc9b6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1615873968403-89c112d879a5?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This headboard adds a touch of natural elegance to any bedroom, featuring a clean, modern oak design.',
      specifications: {
        dimensions: '180cm x 5cm x 120cm',
        material: 'Solid Oak Wood',
        color: 'Natural Wood',
        weight: '30kg'
      }
    },
    {
      id: 12,
      name: 'Vintage Bedroom Sideboard',
      description: 'Stylish vintage sideboard with ample storage and a distressed wood finish',
      price: 8999,
      imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.8,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Crafted from reclaimed wood with antique-style hardware, this sideboard blends function and style.',
      specifications: {
        dimensions: '150cm x 45cm x 80cm',
        material: 'Reclaimed Wood, Metal',
        color: 'Rustic Brown',
        weight: '40kg'
      }
    },
    {
      id: 13,
      name: 'Contemporary Bedroom Shavel Dresser',
      description: 'Spacious dresser with smooth drawers and a sleek walnut finish',
      price: 15999,
      imageUrl: 'https://images.unsplash.com/photo-1618221738438-020c5c52bd65?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 13999,
      rating: 4.5,
      reviewCount: 128,
      images: [
        'https://images.unsplash.com/photo-1618221738438-020c5c52bd65?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'A sleek modern dresser offering generous drawer space and elegant walnut tones.',
      specifications: {
        dimensions: '160cm x 50cm x 90cm',
        material: 'Engineered Wood, Walnut Veneer',
        color: 'Dark Walnut',
        weight: '50kg'
      }
    },
    {
      id: 14,
      name: 'Mid-Century Bedroom Table',
      description: 'Elegant nightstand table with rounded edges and compact storage for nighttime essentials',
      price: 8999,
      imageUrl: 'https://images.unsplash.com/photo-1616627783653-cb87c3f7dd2a?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.8,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1616627783653-cb87c3f7dd2a?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'This compact table features a drawer and open shelf, ideal for bedroom organization.',
      specifications: {
        dimensions: '50cm x 40cm x 55cm',
        material: 'MDF, Solid Wood Legs',
        color: 'Matte White',
        weight: '15kg'
      }
    },
    {
      id: 15,
      name: 'Upholstered Tufted Headboard',
      description: 'Luxurious upholstered headboard with tufted button design and soft linen fabric',
      price: 12999,
      imageUrl: 'https://images.unsplash.com/photo-1615873969245-68f94a541b1f?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 11499,
      rating: 4.6,
      reviewCount: 112,
      images: [
        'https://images.unsplash.com/photo-1615873969245-68f94a541b1f?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Combines plush comfort and modern elegance for a cozy bedroom atmosphere.',
      specifications: {
        dimensions: '160cm x 8cm x 120cm',
        material: 'Linen Fabric, Foam, Plywood',
        color: 'Beige',
        weight: '28kg'
      }
    },
    {
      id: 16,
      name: 'Minimalist Bedside Table',
      description: 'Compact and functional table with drawer and shelf for nighttime storage',
      price: 4999,
      imageUrl: 'https://images.unsplash.com/photo-1631049303179-3b4382adf6ec?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.3,
      reviewCount: 76,
      images: [
        'https://images.unsplash.com/photo-1631049303179-3b4382adf6ec?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Modern design with clean lines, ideal for minimalist bedrooms.',
      specifications: {
        dimensions: '45cm x 35cm x 50cm',
        material: 'Particle Board, Veneer',
        color: 'White',
        weight: '12kg'
      }
    },
    {
      id: 17,
      name: 'Rustic Pine Shavel Storage',
      description: 'Large pine wood dresser with natural finish and deep drawers for clothing storage',
      price: 16999,
      imageUrl: 'https://images.unsplash.com/photo-1621976493110-e78b329503b4?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 14999,
      rating: 4.7,
      reviewCount: 93,
      images: [
        'https://images.unsplash.com/photo-1621976493110-e78b329503b4?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Spacious and sturdy, perfect for organizing all your bedroom essentials.',
      specifications: {
        dimensions: '170cm x 50cm x 95cm',
        material: 'Pine Wood',
        color: 'Natural',
        weight: '55kg'
      }
    },
    {
      id: 18,
      name: 'Scandinavian Sideboard Unit',
      description: 'Elegant sideboard with soft-close drawers and minimalist wood design',
      price: 13999,
      imageUrl: 'https://images.unsplash.com/photo-1622026763804-c6cc1bfa8ba2?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.4,
      reviewCount: 88,
      images: [
        'https://images.unsplash.com/photo-1622026763804-c6cc1bfa8ba2?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Perfect for both storage and style, ideal for bedroom or hallway.',
      specifications: {
        dimensions: '140cm x 45cm x 80cm',
        material: 'Ash Veneer, Metal Legs',
        color: 'Light Oak',
        weight: '42kg'
      }
    },
    {
      id: 19,
      name: 'Floating Wall Nightstand',
      description: 'Space-saving wall-mounted nightstand with drawer and shelf',
      price: 4499,
      imageUrl: 'https://images.unsplash.com/photo-1632996632364-67e8d1767e55?auto=format&fit=crop&w=800&q=80',
      onSale: true,
      available: true,
      salePrice: 3899,
      rating: 4.2,
      reviewCount: 64,
      images: [
        'https://images.unsplash.com/photo-1632996632364-67e8d1767e55?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Great for modern rooms with limited space, installs easily to most walls.',
      specifications: {
        dimensions: '40cm x 30cm x 20cm',
        material: 'MDF, Matte Paint',
        color: 'Charcoal Grey',
        weight: '8kg'
      }
    },
    {
      id: 20,
      name: 'Luxury Velvet Bedroom Bench',
      description: 'Elegant bench with velvet upholstery and gold-finished legs for a luxurious touch',
      price: 10999,
      imageUrl: 'https://images.unsplash.com/photo-1615873968823-4cbf59fd27f0?auto=format&fit=crop&w=800&q=80',
      onSale: false,
      available: true,
      rating: 4.9,
      reviewCount: 142,
      images: [
        'https://images.unsplash.com/photo-1615873968823-4cbf59fd27f0?auto=format&fit=crop&w=800&q=80'
      ],
      details: 'Perfect for the end of the bed or dressing area, adds elegance and comfort.',
      specifications: {
        dimensions: '120cm x 40cm x 45cm',
        material: 'Velvet, Steel Legs',
        color: 'Emerald Green',
        weight: '18kg'
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