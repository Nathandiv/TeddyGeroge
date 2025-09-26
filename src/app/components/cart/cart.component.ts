import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart-item.model';
import { DeliveryModalComponent } from '../delivery-modal/delivery-modal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DeliveryModalComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  isOpen = false;
  showDeliveryModal = false;
  showConfirmation = false; // Control confirmation message visibility
  deliveryInfo: any = null; // Store delivery info for confirmation

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

  openDeliveryModal(): void {
    this.showDeliveryModal = true;
  }

  closeDeliveryModal(): void {
    this.showDeliveryModal = false;
  }

  handleDeliverySubmit(deliveryInfo: any): void {
    this.deliveryInfo = deliveryInfo; // Store delivery info
    this.closeDeliveryModal();
    this.showConfirmation = true; // Show confirmation message
    // Delay checkout to allow user to see confirmation
    setTimeout(() => {
      this.checkout(deliveryInfo);
    }, 3000); // 3-second delay before redirecting to PayFast
  }

  checkout(deliveryInfo: any): void {
    const totalAmount = this.calculateTotal().toFixed(2); // ZAR price

    // Store order details in localStorage
    const orderDetails = {
      cartItems: this.cartItems,
      deliveryInfo,
      totalAmount,
      orderDate: new Date().toISOString()
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // PayFast Test Credentials
    const merchantId = '10000100';
    const merchantKey = '46f0cd694581a';

    // Create a form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.payfast.co.za/eng/process'; // change to www.payfast.co.za on production

    const formFields: { [key: string]: string } = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      amount: totalAmount,
      item_name: 'Cart Checkout',
      item_description: `Order for ${deliveryInfo.name}, Delivery to ${deliveryInfo.address}, ${deliveryInfo.city}, ${deliveryInfo.postalCode}`,
      return_url: 'https://yourdomain.com/success',
      cancel_url: 'https://yourdomain.com/cancel',
      notify_url: 'https://yourdomain.com/ipn',
      email_address: deliveryInfo.email,
      custom_str1: deliveryInfo.phone,
      custom_str2: deliveryInfo.name,
      custom_str3: deliveryInfo.address,
      custom_str4: deliveryInfo.city,
      custom_str5: deliveryInfo.postalCode
    };

    for (const key in formFields) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = formFields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  }
}