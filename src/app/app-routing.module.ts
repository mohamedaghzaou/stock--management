import { AddCustomerComponent } from './Components/Customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './Components/Customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './Components/Customer/list-customer/list-customer.component';
import { ListEmployeeComponent } from './Components/Employee/list-employee/list-employee.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home',
  component: SidebarComponent,
  children: [
    {path: 'customers', component: ListCustomerComponent},
    {path: 'customer/:id', component: EditCustomerComponent},
    {path: 'customer', component: AddCustomerComponent},
    // {path: 'dete', component: DetailsCustomerComponent},
    {path: 'category/add', component: AddCustomerComponent},
    // {path: 'order/add', component: AddOrderComponent},
    {path: 'employe', component: ListEmployeeComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
