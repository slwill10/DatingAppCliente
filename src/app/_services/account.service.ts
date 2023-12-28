import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/' //Ficar ligado nisso pq o backend está rodando na porta 5080.

  constructor(private http: HttpClient) {}

  login(model: any)
  {
    return this.http.post(this.baseUrl + 'account/login', model);
  } 
}
