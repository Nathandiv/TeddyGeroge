import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery-modal.component.html',
  styleUrls: ['./delivery-modal.component.css']
})
export class DeliveryModalComponent {
  @Output() submitDelivery = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();

  deliveryInfo = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  };

  onSubmit(): void {
    if (this.isValidForm()) {
      this.submitDelivery.emit(this.deliveryInfo);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  onClose(): void {
    this.closeModal.emit();
  }

  private isValidForm(): boolean {
    return (
      this.deliveryInfo.name.trim() !== '' &&
      this.deliveryInfo.email.trim() !== '' &&
      this.deliveryInfo.phone.trim() !== '' &&
      this.deliveryInfo.address.trim() !== '' &&
      this.deliveryInfo.city.trim() !== '' &&
      this.deliveryInfo.postalCode.trim() !== ''
    );
  }
}