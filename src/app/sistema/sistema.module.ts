import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagePrincipalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    FormsModule
  ]
})
export class SistemaModule { }
