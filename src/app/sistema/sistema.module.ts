import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PagePrinciaplComponent } from './page-princiapl/page-princiapl.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';


@NgModule({
  declarations: [
    PagePrinciaplComponent,
    PagePrincipalComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }
