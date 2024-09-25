import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  email!: string;
  nomeDaEmpresa!: string;
  setorDaEmpresa!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors!: String[];
  usuario: any;

  constructor(
    private router: Router,

  ) {}


onSubmit() {
}


  preparaCadastrar(event: { preventDefault: () => void; }){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
 
  }


  salvaUserLocal(){


  }

}