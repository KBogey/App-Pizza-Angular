import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPizzaComponent } from './components/add-pizza/add-pizza.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditPizzaComponent } from './components/edit-pizza/edit-pizza.component';
import { LoginComponent } from './components/login/login.component';
import { MenuPizzaComponent } from './components/menu-pizza/menu-pizza.component';
import { PanierComponent } from './components/panier/panier.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addPizza', component: AddPizzaComponent },
  { path: 'menuPizza', component: MenuPizzaComponent },
  { path: 'menuPizza/pizzaDetail', component: PizzaDetailComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'editPizza/:id', component: EditPizzaComponent },
  { path: 'cart', component: PanierComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
