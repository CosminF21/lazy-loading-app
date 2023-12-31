import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LazyTwoComponent} from "./components/lazy-two-component/lazy-two.component";

const routes: Routes = [{ path: '', component: LazyTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTwoRoutingModule { }
