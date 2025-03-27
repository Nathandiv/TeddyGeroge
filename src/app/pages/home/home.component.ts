import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartComponent } from '../../components/cart/cart.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CartComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(CartComponent) cartComponent!: CartComponent;
  products = this.productService.getProducts();

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }
}