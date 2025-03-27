import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'shopping_cart';
  private cartItems = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart();
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem(this.cartKey);
    if (savedCart) {
      this.cartItems.next(JSON.parse(savedCart));
    }
  }

  private saveCart(items: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
    this.cartItems.next(items);
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  addToCart(productId: number): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
      this.saveCart([...currentItems]);
    } else {
      this.saveCart([...currentItems, { productId, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(item => item.productId !== productId);
    this.saveCart(updatedItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart([...currentItems]);
    }
  }

  clearCart(): void {
    this.saveCart([]);
  }
}