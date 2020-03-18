import { Component, OnInit } from '@angular/core';
import { Dentista } from 'src/app/model/dentista';
import { Subject, Observable, empty } from 'rxjs';
import { DentistasService } from '../dentistas.service';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';

@Component({
  selector: 'app-list-dentistas',
  templateUrl: './list-dentistas.component.html',
  styleUrls: ['./list-dentistas.component.scss'],
  preserveWhitespaces: true
})
export class ListDentistasComponent implements OnInit {

  [x: string]: any;

  dentistas$: Observable<Dentista[]>;
  error$ = new Subject<boolean>();

  deleteModalRef: BsModalRef;

  constructor(
    private service: DentistasService,
    private alertService: AlertModalService ) { }

  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.dentistas$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
    }
    handleError() {
      this.alertService.shoAlertDanger(
        'Erro ao carregar dentistas. Tente novamente mais tarde!'
      );
    }
}
