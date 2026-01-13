import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService) { }

  get subTotal() {
    return this.cartService.getSubTotal();
  }

  get totalAmount() {
    return this.subTotal + this.cartService.getTotal();
  }

  pizzacount: number = 0;

  countincre() {
    this.pizzacount = this.pizzacount + 1;
  }
  countdecre() {
    this.pizzacount = this.pizzacount - 1;
  }
  remove(id: any) {
    this.cartService.removeItem(id);
  }
  pay() {
    alert("Payment got sucessfull Order Placed");
  }

  clear() {
    alert("Items are cleared")
  }
}
