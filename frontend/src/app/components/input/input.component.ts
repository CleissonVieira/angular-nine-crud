import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ITable, ITableFields } from './../../datas/DataInterface';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const dataInputs: Object[] = [
  {CodigoEmpresa: 1, NomeEmpresa: '1teste'},
  {CodigoEmpresa: 2, NomeEmpresa: '2teste'},
  {CodigoEmpresa: 3, NomeEmpresa: '3teste'},
  {CodigoEmpresa: 4, NomeEmpresa: '4teste'},
  {CodigoEmpresa: 5, NomeEmpresa: '5teste'},
  {CodigoEmpresa: 6, NomeEmpresa: '6teste'}
];

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterViewInit, OnInit {

  @Input() inputParams: ITable | undefined
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  
  dataSource: MatTableDataSource<Object> = new MatTableDataSource<Object>();
  displayedColumns: string[] = []

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Object>(dataInputs);
    this.dataSource.paginator = this.paginator || null;

    //this.displayedColumns.push('CodigoEmpresa');
    //this.displayedColumns.push('NomeEmpresa');
    //this.displayedColumns.push('Codigo da Empresa');
    //this.displayedColumns.push('Nome da Empresa');
    for (const column in this.inputParams?.children) {
      this.displayedColumns.push(column)
      console.log(column + 'teste')
    }
  }
}


