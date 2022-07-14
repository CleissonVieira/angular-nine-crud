import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ModulesComponent } from './views/modules/modules.component'
import { ModuleBusinessManagerComponent } from './views/module-business-manager/module-business-manager.component'
import { ModulePayrollComponent } from './views/module-payroll/module-payroll.component'

import { HelpPageComponent } from './views/help-page/help-page.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "modulos",
    component: ModulesComponent
  },
  {
    path: "modulos/gerenciador-de-empresas",
    component: ModuleBusinessManagerComponent
  },
  {
    path: "modulos/folha-de-pagamento",
    component: ModulePayrollComponent
  },
  {
    path: "help-page",
    component: HelpPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
