import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PagePrincipalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }
