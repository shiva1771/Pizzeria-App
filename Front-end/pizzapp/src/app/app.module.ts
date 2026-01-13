import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    OrderpizzaComponent,
    BuildpizzaComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
