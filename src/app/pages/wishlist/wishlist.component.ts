import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CartComponent } from '../../components/cart/cart.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CartComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  openCart() {
    console.log('Cart opened');
}
  wishlistProducts: Product[] = [];

  constructor(
    private wishlistService: WishlistService,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.wishlistService.getWishlistItems().subscribe(items => {
      this.wishlistProducts = items
        .map(item => this.productService.getProduct(item.productId))
        .filter((product): product is Product => product !== undefined);
    });
  }

  removeFromWishlist(productId: number): void {
    this.wishlistService.removeFromWishlist(productId);
  }

  addToCart(productId: number): void {
    this.cartService.addToCart(productId);
  }
}