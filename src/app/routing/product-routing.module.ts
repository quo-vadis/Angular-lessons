import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product/product-list.component';
import { ProductGuardService } from '../product/product-guard.service';
import { ProductDetailsComponent } from '../product/product-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path : 'product', component: ProductListComponent},
      {path : 'product/:id', 
        canActivate : [ProductGuardService],
        component: ProductDetailsComponent}
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
