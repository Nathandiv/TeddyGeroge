import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../shared-ui/footer/footer.component";
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  @ViewChild(CartComponent) cartComponent!: CartComponent;

  

  contactForm: FormGroup;
  currentSlide = 0;
  carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Modern Living Room'
    },
    {
      url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Contemporary Office'
    },
    {
      url: 'https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Elegant Dining Room'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }

  openCart(): void {
    if (this.cartComponent) {
      this.cartComponent.open();
    }
  }

}