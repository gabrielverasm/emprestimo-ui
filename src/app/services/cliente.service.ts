import { Cliente } from './../../entity/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private http: HttpClient) {

   }

   salvar(cliente: Cliente) : Observable<Cliente>  {
    return this.http.post<Cliente>('http://localhost:8080/api/cliente', cliente);
  }

  getClienteById(id: number) : Observable<Cliente>  {
    return this.http.get<Cliente>(`http://localhost:8080/api/cliente/${id}`);
  }
}
