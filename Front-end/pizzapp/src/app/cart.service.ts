import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];
  ingredientsTotal = 0;

  addItem(item: any) {
    const found = this.cartItems.find(i => i._id === item._id);
    if (!found) {
      this.cartItems.push(item);
    }
  }

  removeItem(id: any) {
    this.cartItems = this.cartItems.filter(i => i._id !== id);
  }

  getItems() {
    return this.cartItems;
  }

  increaseQty(id: any) {
    const item = this.cartItems.find(i => i._id === id);
    if (item) item.qty++;
  }

  decreaseQty(id: any) {
    const item = this.cartItems.find(i => i._id === id);
    if (item && item.qty > 1) item.qty--;
  }

  getSubTotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }

  getTotal() {
    return this.ingredientsTotal;
  }

  setTotal(value: number) {
    this.ingredientsTotal = value;
  }
  
}
