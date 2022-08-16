import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { BasketsModule } from './components/baskets/baskets.module';
import { HomeModule } from './components/home/home.module';
import { ProductsModule } from './components/products/products.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class UiModule { }
