import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceByHoursComponent } from './invoice-by-hours/invoice-by-hours.component';
import { InvoiceByDatesComponent } from './invoice-by-dates/invoice-by-dates.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';

const routes: Routes = [
  {path:'', component: InvoiceByHoursComponent },
  {path:'invoiceByDates', component: InvoiceByDatesComponent },
  {path:'addEmployee', component: AddEmployeeComponent },
  {path:'modifyEmployee', component: ModifyEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
