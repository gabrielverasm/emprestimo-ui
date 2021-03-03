import { ModalidadesDTO } from './../../entity/modalidadesDTO';
import { EmprestimoService } from './../services/emprestimo.service';
import { Cliente } from './../../entity/cliente';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo-show',
  templateUrl: './emprestimo-show.component.html',
  styleUrls: ['./emprestimo-show.component.css']
})
export class EmprestimoShowComponent implements OnInit {
  modalidadeDTO: ModalidadesDTO;
  id: number;

  constructor(
    private activatedRouter: ActivatedRoute,
    private emprestimoService: EmprestimoService,
  ) { }

  ngOnInit() {
    let params: Observable<Params> = this.activatedRouter.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.emprestimoService.getEmprestimoModalidade(this.id).subscribe( resp =>{
          this.modalidadeDTO = resp;
        },errorResponse => this.modalidadeDTO = new ModalidadesDTO())
      }
    })
  }

  onSubmit() {
  }

}
