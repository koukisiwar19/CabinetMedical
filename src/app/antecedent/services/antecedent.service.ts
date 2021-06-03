import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/APIS/apis';
import { Antecedent } from '../antecedent/antecedent';
import { DeleteResponseDto } from '../dto/delete-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AntecedentService {
private antecedent: Antecedent[] = [];
  constructor(private http: HttpClient) {
    this.antecedent = [
      new Antecedent(),
    ];
   }
   addAntecedent(antecedent: Antecedent): Observable<Antecedent> {
    return this.http.post<Antecedent>(APIS.antecedent, antecedent);

}
getAntecedentById(id: number): Observable<Antecedent> {

  return this.http.get<Antecedent>(APIS.antecedent + id);
}
deleteAntecedent(id: number): Observable<DeleteResponseDto> {

  return this.http.delete<DeleteResponseDto>(APIS.antecedent + id);
}
}
