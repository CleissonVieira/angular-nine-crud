import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  produto: string | undefined = undefined;

  SelecionaProduto(produtoSelecionado: string): void {
    this.produto = produtoSelecionado;
    console.log("Produto:" + produtoSelecionado)
  }

  constructor() { }
  ngOnInit(): void { }
}

export enum Produtos {
  PreficicaServico = 'PreficicaServico',
  CadastroInteligente = 'CadastroInteligente'
}
