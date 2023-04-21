import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductRegisterComponent } from './component/products/product-register/product-register.component';
import { ProductListComponent } from './component/products/product-list/product-list.component';

const routes: Routes = [ {
  path: "",
  component: ProductRegisterComponent
},
{
  path: "register",
  component: ProductRegisterComponent
},
{
  path: "list",
  component: ProductListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
