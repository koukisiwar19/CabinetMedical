import { APIS } from './../../APIS/apis';
import { Patient } from '../patients/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResponseDto } from '../dto/delete-response.dto';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  private patients: Patient[] = [];
  constructor(private http: HttpClient)  {
    this.patients = [
      new Patient(1, 'Aloui', 'Olfa', '22-05-1996', 'centre urbain nord', 52147896, 'femme',true),

    ];
   }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(APIS.patient, patient);
  }
  getPatientById(id: number): Observable<Patient> {

    return this.http.get<Patient>(APIS.patient + id);
  }
  deletePatient(id: number): Observable<DeleteResponseDto> {
   /*  const params = new HttpParams().set(
      'access_token',
      localStorage.getItem('token')
    ); */
    // '1' == 1 mais '1' !== 1
    return this.http.delete<DeleteResponseDto>(APIS.patient + id);
  }
}
