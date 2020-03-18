import { CrudService } from './../shared/crud-service';
import { Injectable } from '@angular/core';
import { Dentista } from '../model/dentista';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DentistasService  extends CrudService<Dentista>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}dentistas` );
  }
}
