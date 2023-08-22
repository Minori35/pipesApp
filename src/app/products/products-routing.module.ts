import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './pages/basics/basics.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path :'basicos',
    component : BasicsComponent
  },
  {
    path :'numbers',
    component : NumberPageComponent
  },
  {
    path :'uncommon',
    component : UncommonPageComponent
  },
  {
    path :'**',
    redirectTo:'basicos'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
