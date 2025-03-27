import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  wishlistProducts: Product[] = [];
  currentPage = 1;
  itemsPerPage = 9;

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

  get paginatedWishlist(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.wishlistProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.wishlistProducts.length / this.itemsPerPage);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  removeFromWishlist(productId: number): void {
    this.wishlistService.removeFromWishlist(productId);
  }

  addToCart(productId: number): void {
    this.cartService.addToCart(productId);
  }

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }
}