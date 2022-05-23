import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Pizza } from "../../models/pizza";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Pizzas: Pizza[] = []

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllPizzas().subscribe(data => {
      console.log(data);
      this.Pizzas = data;
    })
  }

  removePizza(id: number) {
    this.adminService.deletePizza(id).subscribe( data => {
      // this.Pizzas.filter(Pizza=>Pizza.id != id);
      this.ngOnInit();
      })
  }

}
