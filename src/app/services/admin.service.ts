import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient ) { }

  getById(id: number): Observable<Pizza> {
    return this.httpClient.get<Pizza>(this.baseURL + '/pizzas/' + id);
  }

  getAllPizzas(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(`${this.baseURL}/pizzas`);
  }

  postPizza(pizza: Pizza): Observable<Pizza> {
    return this.httpClient.post<Pizza>(`${this.baseURL}/pizzas`, pizza);
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.httpClient.put<Pizza>(`${this.baseURL}/pizzas/${pizza.id}`, pizza)
  }

  deletePizza(id: number): Observable<Pizza> {
    return this.httpClient.delete<Pizza>(`${this.baseURL}/pizzas/`+id);
  }


}
