import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component: PagePrincipalComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
