import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent {

  buildpizzadata: any[] = [];
  total = 0;

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/buildpizzas")
      .subscribe(data => this.buildpizzadata = data);
  }

  calculateTotal() {
    this.total = 0;

    for (let item of this.buildpizzadata) {
      if (item.selected) {
        this.total += item.price;
      }
    }

    this.cartService.setTotal(this.total);
  }
}
