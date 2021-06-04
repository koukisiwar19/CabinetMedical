import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/APIS/apis';
import { DeleteResponseDto } from '../dto/delete-response.dto';
import { EffetSecondaire } from '../effetSecondaire/effetSecondaire';

@Injectable({
  providedIn: 'root'
})
export class EffetSecondaireService {
private effetsecondaire: EffetSecondaire[] = [];
  constructor(private http: HttpClient) { 
    this.effetsecondaire = [
      new EffetSecondaire(),
    ];
  }
  addEffetSecondaire(effetsecondaire: EffetSecondaire): Observable<EffetSecondaire> {
    return this.http.post<EffetSecondaire>(APIS.effetSecondaire, effetsecondaire);

}
getEffetSecondaireById(id: number): Observable<EffetSecondaire> {

  return this.http.get<EffetSecondaire>(APIS.effetSecondaire + id);
}
deleteAntecedent(id: number): Observable<DeleteResponseDto> {

  return this.http.delete<DeleteResponseDto>(APIS.effetSecondaire+ id);
}
}
