import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartComponent } from '../../components/cart/cart.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../shared-ui/footer/footer.component";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CartComponent, NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent  implements OnInit {
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filteredProductss: Product[] = [];
  currentPage = 1;
  itemsPerPage = 9;

  tabs = ['All', 'Lounge', 'Bedroom'];
  activeTab = this.tabs[0];

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.getFilteredProducts();
    this.getFilteredProductss();
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get paginatedFilteredProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get paginatedFilteredProductss(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  getFilteredProducts(): void {
    this.filteredProducts = this.products.filter(product => product.id >= 3 && product.id <= 8);
  }

  getFilteredProductss(): void {
    this.filteredProductss = this.products.filter(product => product.id >= 2 && product.id <= 11);
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
