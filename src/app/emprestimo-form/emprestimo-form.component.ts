import { ClienteService } from './../services/cliente.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Cliente } from '../../entity/cliente';

@Component({
  selector: 'app-emprestimo-form',
  templateUrl: './emprestimo-form.component.html',
  styleUrls: ['./emprestimo-form.component.css']
})
export class EmprestimoFormComponent {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    ) {
    this.cliente = new Cliente();
   }

   onSubmit() {
     this.clienteService.salvar(this.cliente).subscribe( resp => {
       this.success = true;
       this.errors = null;
       this.router.navigate([`modalidades/${resp.id}`]);
     } , errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
     })
   }

}
