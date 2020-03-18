import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', pathMatch:'full',redirectTo: 'dentistas'
  },
  {
    path: 'dentistas',
    loadChildren: () => import('./dentistas/dentistas.module').then(m => m.DentistasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
