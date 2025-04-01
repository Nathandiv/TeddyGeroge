import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartComponent } from '../../components/cart/cart.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../shared-ui/footer/footer.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CartComponent, NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  products = this.productService.getProducts();
  currentPage = 1;
  itemsPerPage = 9;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }
}
