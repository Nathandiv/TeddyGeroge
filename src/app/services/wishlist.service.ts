import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishlistItem } from '../models/wishlist-item.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistKey = 'wishlist_items';
  private wishlistItems = new BehaviorSubject<WishlistItem[]>([]);

  constructor() {
    this.loadWishlist();
  }

  private loadWishlist(): void {
    const savedWishlist = localStorage.getItem(this.wishlistKey);
    if (savedWishlist) {
      this.wishlistItems.next(JSON.parse(savedWishlist));
    }
  }

  private saveWishlist(items: WishlistItem[]): void {
    localStorage.setItem(this.wishlistKey, JSON.stringify(items));
    this.wishlistItems.next(items);
  }

  getWishlistItems() {
    return this.wishlistItems.asObservable();
  }

  addToWishlist(productId: number): void {
    const currentItems = this.wishlistItems.value;
    if (!currentItems.some(item => item.productId === productId)) {
      this.saveWishlist([...currentItems, { productId, dateAdded: new Date() }]);
    }
  }

  removeFromWishlist(productId: number): void {
    const currentItems = this.wishlistItems.value;
    const updatedItems = currentItems.filter(item => item.productId !== productId);
    this.saveWishlist(updatedItems);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistItems.value.some(item => item.productId === productId);
  }
}