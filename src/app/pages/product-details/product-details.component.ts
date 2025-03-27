import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../models/product.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CartComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  products = this.productService.getProducts();


  product: Product | undefined;
  selectedImageIndex = 0;
  isInWishlist = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(productId) || {} as Product;
  
    if (!this.product.id) {
      this.router.navigate(['/']);
      return;
    }
  
    this.isInWishlist = this.wishlistService.isInWishlist(this.product.id);
  }
  // ngOnInit(): void {
  //   const productId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.product = this.productService.getProduct(productId);
    
  //   if (!this.product) {
  //     this.router.navigate(['/']);
  //     return;
  //   }

  //   this.isInWishlist = this.wishlistService.isInWishlist(this.product.id);
  // }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product.id);
    }
  }

  toggleWishlist(): void {
    if (!this.product) return;

    if (this.isInWishlist) {
      this.wishlistService.removeFromWishlist(this.product.id);
    } else {
      this.wishlistService.addToWishlist(this.product.id);
    }
    this.isInWishlist = !this.isInWishlist;
  }

  getRatingStars(rating: number): number[] {
    return Array(5).fill(0).map((_, index) => index < rating ? 1 : 0);
  }

  viewDetails(): void {
    if (this.product) {
      this.router.navigate(['/product', this.product.id]);
    }
  }

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }
}