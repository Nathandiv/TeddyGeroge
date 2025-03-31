import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';
interface CategoryCard {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
  price: number;
  oldPrice?: number;
  rating: number;
  inStock: boolean;
}

interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  
  carouselSlides: CarouselSlide[] = [
    {
      title: 'Discover Inspired Living',
      subtitle: 'Explore Elevated Living',
      description: 'Discover elevated living at its finest with TP2 Furniture Shop. Our curated collection combines timeless elegance with modern flair, offering furnishings that redefine style and comfort.',
      image: 'https://i5-images.massmart.co.za/asr/2c5eaf3c-efde-4c88-9269-cc7ee876dd90.c5bb685b0ab06277c6835a567bdccc86.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      alt: 'Modern living room setup'
    },
    {
      title: 'Premium Comfort',
      subtitle: 'Experience Luxury',
      description: 'Indulge in the perfect blend of comfort and style with our premium furniture collection. Each piece is carefully selected to bring both functionality and elegance to your living space.',
      image: 'https://i5-images.massmart.co.za/asr/e7e16169-827b-419d-a125-2d04aa4ead92.4fcba9c0f62fdf5d7327526703256c1f.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      alt: 'Luxury furniture showcase'
    }
  ];

  categoryCards: CategoryCard[] = [
    {
      id: 1,
      image: 'https://nathandiv.github.io/TP2_Furniture_Store/assets/images/nina-couch-grey.jpg',
      title: 'Nina Couch Grey',
      description: 'With Ottoman, grey linen',
      alt: 'Nina Couch Grey',
      price: 899.99,
      oldPrice: 1299.99,
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      image: 'https://nathandiv.github.io/TP2_Furniture_Store/assets/images/nina-couch-black.jpg',
      title: 'Nina Couch Black',
      description: 'Black leather feel buffalo Sued, with Ottoman',
      alt: 'Nina Couch Black',
      price: 999.99,
      rating: 5,
      inStock: true
    },
    {
      id: 3,
      image: 'https://nathandiv.github.io/TP2_Furniture_Store/assets/images/nina-couch-brown.jpg',
      title: 'Nina Couch Brown',
      description: 'With Ottoman - Black linen',
      alt: 'Nina Couch Brown',
      price: 849.99,
      oldPrice: 1199.99,
      rating: 4.8,
      inStock: false
    }
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.carouselSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getPartialStar(rating: number): number {
    return rating % 1;
  }
}