import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistasRoutingModule } from './dentistas-routing.module';
import { FormDentistasComponent } from './form-dentistas/form-dentistas.component';
import { ListDentistasComponent } from './list-dentistas/list-dentistas.component';


@NgModule({
  declarations: [FormDentistasComponent, ListDentistasComponent],
  imports: [
    CommonModule,
    DentistasRoutingModule
  ]
})
export class DentistasModule { }
