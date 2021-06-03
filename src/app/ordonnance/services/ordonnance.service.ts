import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/APIS/apis';
import { DeleteResponseDto } from '../dto/delete-response.dto';
import { Ordonnance } from '../ordonnance/ordonnance';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
private ordonnances : Ordonnance[];

  constructor(private http: HttpClient) { 
    this.ordonnances = [
      new Ordonnance(),
    ];
  }
  addOrdonnance(ordonnances : Ordonnance) :Observable<Ordonnance> {
    return this.http.post<Ordonnance>(APIS.ordonnance , ordonnances);

  }
  getOrdonnanceById ( id : number): Observable<Ordonnance> {
    return this.http.get<Ordonnance>(APIS.ordonnance + id);
  }
  deleteOrdonnance(id: number): Observable<DeleteResponseDto> {

    return this.http.delete<DeleteResponseDto>(APIS.ordonnance  + id);
  }
}
