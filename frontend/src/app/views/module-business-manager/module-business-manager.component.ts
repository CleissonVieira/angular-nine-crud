import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-business-manager',
  templateUrl: './module-business-manager.component.html',
  styleUrls: ['./module-business-manager.component.css']
})
export class ModuleBusinessManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  isLinear = false;

  formValidateAndSend(): void {
    console.log("Validando e enviado os dados...")
  }

}
