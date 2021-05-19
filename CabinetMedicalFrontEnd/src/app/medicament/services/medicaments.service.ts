import { DeleteResponseDto } from './../../medicament/dto/delete-response.dto';

import { Medicaments } from './../medicaments/medicaments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../../APIS/apis';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {
  private medicaments : Medicaments[];
  constructor(private http: HttpClient) {
    this.medicaments = [
      new Medicaments(),
    ];
  }
  addMedicament(medicament : Medicaments): Observable<Medicaments> {
    return this.http.post<Medicaments>(APIS.medicaments , medicament );
  }
  getMedicamentById(id: number): Observable<Medicaments> {

    return this.http.get<Medicaments>(APIS.medicaments  + id);
  }
  deleteMedicament(id: number): Observable<DeleteResponseDto> {

    return this.http.delete<DeleteResponseDto>(APIS.medicaments  + id);
  }
}
