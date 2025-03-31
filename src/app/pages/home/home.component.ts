import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';
import { CartComponent } from '../../components/cart/cart.component';
import { ProductService } from '../../services/product.service';


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

    @ViewChild(CartComponent) cartComponent!: CartComponent;
    products = this.productService.getProducts();
    currentPage = 1;
    itemsPerPage = 9;
  
    constructor(
      private productService: ProductService,
      private cartService: CartService
    ) {}

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

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }
}