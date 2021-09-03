import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InvoiceByHoursComponent } from './invoice-by-hours/invoice-by-hours.component';
import { InvoiceByDatesComponent } from './invoice-by-dates/invoice-by-dates.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    InvoiceByHoursComponent,
    InvoiceByDatesComponent,
    ModifyEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
