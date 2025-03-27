import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart-item.model';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  isOpen = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  getProduct(productId: number): Product | undefined {
    return this.productService.getProduct(productId);
  }

  calculateItemTotal(item: CartItem): number {
    const product = this.getProduct(item.productId);
    if (!product) return 0;
    const price = product.onSale ? (product.salePrice || product.price) : product.price;
    return price * item.quantity;
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + this.calculateItemTotal(item), 0);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.removeItem(productId);
      return;
    }
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  close(): void {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }

  async checkout(): Promise<void> {
    const stripe = await loadStripe('your_publishable_key');
    
    if (!stripe) {
      console.error('Stripe failed to load');
      return;
    }

    // Here you would typically make an API call to your backend to create a checkout session
    alert('Checkout functionality would be implemented here with Stripe');
  }
}