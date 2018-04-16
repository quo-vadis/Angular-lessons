import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpasesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './../routing/product-routing.module';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpasesPipe,
    ProductDetailsComponent
  ],
  providers : [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
