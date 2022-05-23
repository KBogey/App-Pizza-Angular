import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pizza } from 'src/app/models/pizza';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  pizzaForm: Pizza = new Pizza();

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  pizzaFormValidation(): void {
    this.adminService.postPizza(this.pizzaForm).subscribe( data => {
      this.router.navigate(['/menuPizza']);
    })
  }

}
