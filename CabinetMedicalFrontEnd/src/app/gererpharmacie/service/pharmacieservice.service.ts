import { DeleteResponseDto } from './../../gererpharmacie/dto/delete-response.dto';
import { APIS } from './../../APIS/apis';

import { Medicament } from './../medicament/medicament';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacieserviceService {
private medicaments : Medicament[];
  constructor( private http: HttpClient) {
 this.medicaments = [
   new Medicament(),
 ];
  }
  addMedicament(medicament : Medicament): Observable<Medicament> {
    return this.http.post<Medicament>(APIS.medicament , medicament );
  }
  getMedicamentById(id: number): Observable<Medicament> {

    return this.http.get<Medicament>(APIS.medicament  + id);
  }
  deleteMedicament(id: number): Observable<DeleteResponseDto> {

    return this.http.delete<DeleteResponseDto>(APIS.medicament  + id);
  }
}


