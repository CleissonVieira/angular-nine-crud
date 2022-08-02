import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { InputComponent } from './components/input/input.component'

import { ModulesComponent } from './views/modules/modules.component';
import { ModuleBusinessManagerComponent } from './views/module-business-manager/module-business-manager.component';
import { ModulePayrollComponent } from './views/module-payroll/module-payroll.component';

import { HelpPageComponent } from './views/help-page/help-page.component';
import { CompaniesComponent } from './views/registration-pages/companies/companies.component';
import { AdmissionsComponent } from './views/registration-pages/admissions/admissions.component';
import { TerminationsComponent } from './views/registration-pages/terminations/terminations.component';
import { VacationReceiptComponent } from './views/registration-pages/vacation-receipt/vacation-receipt.component';
import { VestingPeriodsComponent } from './views/registration-pages/vesting-periods/vesting-periods.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ModulesComponent,
    ModuleBusinessManagerComponent,
    ModulePayrollComponent,
    HelpPageComponent,
    CompaniesComponent,
    AdmissionsComponent,
    TerminationsComponent,
    VacationReceiptComponent,
    VestingPeriodsComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatTreeModule,
    MatTabsModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
