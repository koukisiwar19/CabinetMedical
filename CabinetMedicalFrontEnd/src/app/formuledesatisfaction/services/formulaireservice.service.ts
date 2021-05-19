import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from './../../APIS/apis';

import { DeleteResponseDto } from '../dto/delete-response.dto';
import { Formulaire } from '../Formulaire/formulaire';

@Injectable({
  providedIn: 'root'
})
export class FormulaireserviceService {
  private formulaires: Formulaire[] = [];

  constructor(private http: HttpClient) {
    this.formulaires = [
      new Formulaire(),
    ];
  }

  addFormulaire(formulaire: Formulaire): Observable< Formulaire> {
    return this.http.post<Formulaire>(APIS.formulaire, formulaire);

}
getFormulaireById(id: number): Observable<Formulaire> {

  return this.http.get<Formulaire>(APIS.formulaire + id);
}
deleteFormulaire(id: number): Observable<DeleteResponseDto> {

  return this.http.delete<DeleteResponseDto>(APIS.formulaire + id);
}
}
