import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { LazyTwoComponent } from './components/lazy-two-component/lazy-two.component';


@NgModule({
  declarations: [
    LazyTwoComponent
  ],
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ]
})
export class LazyTwoModule { }
