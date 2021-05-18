import { Consultation } from './../consultation/consultation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from './../../APIS/apis';

@Injectable({
  providedIn: 'root'
})
export class ConsultationserviceService {
private consultations: Consultation [] = [];
  constructor(private http: HttpClient) {
    this.consultations = [
      new Consultation(),
    ];
  }
  addConsultation(consultation: Consultation): Observable< Consultation> {
    return this.http.post<Consultation>(APIS.consultation, consultation);

}
}
