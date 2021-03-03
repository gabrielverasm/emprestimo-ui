import { ModalidadesDTO } from './../../entity/modalidadesDTO';
import { Cliente } from './../../entity/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor( private http: HttpClient) {

   }

  getEmprestimoModalidade(id: number) : Observable<ModalidadesDTO>  {
    return this.http.get<ModalidadesDTO>(`http://localhost:8080/api/emprestimo/${id}`);
  }
}
