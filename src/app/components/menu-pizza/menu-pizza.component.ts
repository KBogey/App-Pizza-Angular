import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Pizza } from "../../models/pizza";

@Component({
  selector: 'app-menu-pizza',
  templateUrl: './menu-pizza.component.html',
  styleUrls: ['./menu-pizza.component.css']
})
export class MenuPizzaComponent implements OnInit {
  Pizzas: Pizza[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllPizzas().subscribe(data => {
        console.log(data);
        this.Pizzas = data;
      })
  }

}
