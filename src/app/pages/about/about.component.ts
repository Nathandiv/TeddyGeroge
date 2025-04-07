import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CartComponent } from '../../components/cart/cart.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FooterComponent } from '../../shared-ui/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, NavbarComponent, FooterComponent, CartComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    @ViewChild(CartComponent) cartComponent!: CartComponent;

      constructor(
        private productService: ProductService,
        private cartService: CartService
      ) {}
  
  team = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Jane Smith',
      position: 'Design Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }
}