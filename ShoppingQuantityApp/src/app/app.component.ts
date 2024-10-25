import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Quantity App';
  availableQuantity = 20;  // Initial stock
  inputQuantity = 1;       // Default quantity to add to cart
  errorMessage = '';
  confirmationMessage = '';

  addQuantity() {
    if (this.inputQuantity <= 0 || this.inputQuantity > this.availableQuantity) {
      this.errorMessage = 'Requested quantity is not available';
      this.confirmationMessage = '';
    } else {
      this.availableQuantity -= this.inputQuantity;
      this.confirmationMessage = `Added ${this.inputQuantity} items to the cart. Remaining stock: ${this.availableQuantity}`;
      this.errorMessage = '';
    }
  }
}
