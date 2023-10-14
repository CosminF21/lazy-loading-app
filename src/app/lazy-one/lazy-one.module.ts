import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyOneRoutingModule } from './lazy-one-routing.module';
import {LazyOneComponent} from "./components/lazy-one-component/lazy-one.component";
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    LazyOneComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ]
})
export class LazyOneModule { }
