import { AddCustomerComponent } from './Components/Customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './Components/Customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './Components/Customer/list-customer/list-customer.component';
import { ListEmployeeComponent } from './Components/Employee/list-employee/list-employee.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { EditProductComponent } from './Components/Product/edit-product/edit-product.component';
import { ListProductComponent } from './Components/Product/list-product/list-product.component';
import { ListSupplierComponent } from './Components/Supplier/list-Supplier/list-supplier/list-supplier.component';
import { AddSupplierComponent } from './Components/Supplier/add-Supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './Components/Supplier/edit-supplier/edit-supplier.component';

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
    //employees routing
    {path: 'employee', component: ListEmployeeComponent},
    //products routing
    {path: 'products', component: ListProductComponent},
    {path: 'product/add', component: AddProductComponent},
    {path: 'product/edit/:id', component: EditProductComponent},
    //suppliers routing
    {path: 'suppliers', component: ListSupplierComponent},
    {path: 'supplier/add', component: AddSupplierComponent},
    {path: 'supplier/edit/:id', component: EditSupplierComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
