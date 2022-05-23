import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddPizzaComponent } from './components/add-pizza/add-pizza.component';
import { MenuPizzaComponent } from './components/menu-pizza/menu-pizza.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { EditPizzaComponent } from './components/edit-pizza/edit-pizza.component';
import { PanierComponent } from './components/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    LoginComponent,
    AddPizzaComponent,
    MenuPizzaComponent,
    PizzaDetailComponent,
    EditPizzaComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
