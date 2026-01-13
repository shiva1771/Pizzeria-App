import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent {

  orderpizzadata: any[] = [];

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) { }


  ngOnInit() {
    this.http.get<any>("http://localhost:3000/orderpizzas")
      .subscribe(data => {
        this.orderpizzadata = data.map((p: any) => ({
          ...p,
          added: this.cartService.getItems().some(i => i._id === p._id)
        }));
      });
  }
   
  orderpizzafunction(pizza: any) {
    pizza.added = !pizza.added;

    if (pizza.added) {
      this.cartService.addItem({ ...pizza, qty: 1 });
    } else {
      this.cartService.removeItem(pizza._id);
    }
  }

}
