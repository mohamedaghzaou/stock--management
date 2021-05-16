import { ListCategoryComponent } from './Components/Category/list-category/list-category.component';
import { DetailOrderComponent } from './Components/order/detail-order/detail-order.component';
import { AddOrderComponent } from './Components/order/add-order/add-order.component';
import { AddSupplierComponent } from './Components/Supplier/add-Supplier/add-supplier/add-supplier.component';
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
// import { AddSupplierComponent } from './Components/Supplier/add-Supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './Components/Supplier/edit-supplier/edit-supplier.component';
import { CustOrderComponent } from './Components/Customer/cust-order/cust-order.component';
import { ListOrderComponent } from './Components/order/list-order/list-order.component';
import { SupplierDetailsComponent } from './Components/Supplier/supplier-details/supplier-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home',
  component: SidebarComponent,
  children: [
    {path: 'customer', component: ListCustomerComponent},
    {path: 'customer/edit/:id', component: EditCustomerComponent},
    {path: 'customer/orders/:id', component: CustOrderComponent},
    {path: 'customer/add', component: AddCustomerComponent},
    // {path: 'dete', component: DetailsCustomerComponent},
    {path: 'category', component: ListCategoryComponent},
    {path: 'order/add', component: AddOrderComponent},
    {path: 'order', component: ListOrderComponent},
    {path: 'product', component: AddProductComponent},
    {path: 'order/details/:id', component: DetailOrderComponent},
    //product routing
    {path: 'products', component: ListProductComponent},
    {path: 'product/add', component: AddProductComponent},
    {path: 'product/edit/:id', component: EditProductComponent},
    //supllier routing
    {path: 'suppliers', component:ListSupplierComponent },
    {path: 'supplier-details/:id', component:SupplierDetailsComponent},

    {path: 'supplier/add', component: AddSupplierComponent},
    {path: 'supplier/edit/:id', component: EditSupplierComponent},
    //employee
    {path: 'employee', component:ListEmployeeComponent },



  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
