import { ClienteService } from './services/cliente.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmprestimoFormComponent } from './emprestimo-form/emprestimo-form.component';
import { EmprestimoService } from './services/emprestimo.service';
import { EmprestimoShowComponent } from './emprestimo-show/emprestimo-show.component';

@NgModule({
  declarations: [
    AppComponent,
    EmprestimoFormComponent,
    EmprestimoShowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    EmprestimoService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
