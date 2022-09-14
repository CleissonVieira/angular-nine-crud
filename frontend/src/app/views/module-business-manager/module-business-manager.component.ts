import { Component, OnInit } from '@angular/core';

import { ITable } from './../../datas/DataInterface';
import { DataEmpresa } from '../../datas/data-business-manager/empresa';
import { DataCfgEmpresaGem } from '../../datas/data-business-manager/cfgempresagem';
import { DataContador } from '../../datas/data-business-manager/contador';
import { DataEstabelecimento } from '../../datas/data-business-manager/estab';
import { DataSocio } from '../../datas/data-business-manager/socio';

@Component({
  selector: 'app-module-business-manager',
  templateUrl: './module-business-manager.component.html',
  styleUrls: ['./module-business-manager.component.css']
})
export class ModuleBusinessManagerComponent implements OnInit {

  //#region [Variáveis]
  public inputsEmpresa: ITable = DataEmpresa
  public inputsCfgEmpresaGem: ITable = DataCfgEmpresaGem
  public inputsContador: ITable = DataContador
  public inputsEstabelecimento: ITable = DataEstabelecimento
  public inputsSocio: ITable = DataSocio
  //#endregion

  //#region [Métodos]
  formValidateAndSend(): void {
    console.log("Validando e enviado os dados...")
  }
  //#endregion

  //#region [Construtor + ngOnInit]
  constructor() { }
  ngOnInit(): void { }
  //#endregion
}
