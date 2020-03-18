import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDentistasComponent } from './list-dentistas/list-dentistas.component';



const routes: Routes = [
  {path: '', component: ListDentistasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistasRoutingModule { }
