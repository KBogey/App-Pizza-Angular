import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from "../../services/admin.service";
import { Pizza } from "../../models/pizza";

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css']
})
export class EditPizzaComponent implements OnInit {
  pizzaEditForm!: Pizza;

  constructor(private activatedRoute: ActivatedRoute,
              private adminService: AdminService,
              private router: Router) 
  { }

  ngOnInit(): void {
    let id: number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.adminService.getById(id).subscribe( data => {
      this.pizzaEditForm = data; 
    })
  }

  submitEditForm(): void {
    this.adminService.updatePizza(this.pizzaEditForm).subscribe( data => {
      this.router.navigate(["/admin"]);
    })
  }


}



  

 


