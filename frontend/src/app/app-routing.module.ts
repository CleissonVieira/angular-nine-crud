import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ModulesComponent } from './views/modules/modules.component';
import { ModuleBusinessManagerComponent } from './views/module-business-manager/module-business-manager.component';

import { ModulePayrollComponent } from './views/module-payroll/module-payroll.component';
import { CompaniesComponent } from './views/registration-pages/companies/companies.component';
import { AdmissionsComponent } from './views/registration-pages/admissions/admissions.component';
import { TerminationsComponent } from './views/registration-pages/terminations/terminations.component';
import { VacationReceiptComponent } from './views/registration-pages/vacation-receipt/vacation-receipt.component';
import { VestingPeriodsComponent } from './views/registration-pages/vesting-periods/vesting-periods.component';

import { HelpPageComponent } from './views/help-page/help-page.component';

import { LoginPageComponent } from './views/login-page/login-page.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent
  },
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
    path: "modulos/folha-de-pagamento/configuracao-das-empresas",
    component: CompaniesComponent
  },
  {
    path: "modulos/folha-de-pagamento/cadastro-de-admissoes",
    component: AdmissionsComponent
  },
  {
    path: "modulos/folha-de-pagamento/cadastro-de-rescisoes",
    component: TerminationsComponent
  },
  {
    path: "modulos/folha-de-pagamento/cadastro-de-recibos-das-ferias",
    component: VacationReceiptComponent
  },
  {
    path: "modulos/folha-de-pagamento/cadastro-de-periodos-aquisitivos",
    component: VestingPeriodsComponent
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
