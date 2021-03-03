import { EmprestimoFormComponent } from './emprestimo-form/emprestimo-form.component';
import { EmprestimoShowComponent } from './emprestimo-show/emprestimo-show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component: EmprestimoFormComponent},
  { path : 'modalidades/:id', component: EmprestimoShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
