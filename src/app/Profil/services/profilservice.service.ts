import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../profils/profile';
 @Injectable({
  providedIn: 'root'
})
export class ProfilserviceService {
  private profils: Profile[] = [];
  constructor(private http: HttpClient) {
    this.profils = [
      new Profile( 'KoukiSiwar', 'Kouki', 'siwar', 'koukisiw@gmail.com', 'beb lkhadhra', 'Assistante'),
      new Profile( 'memoum', 'Memmiche', 'Oumayma', 'memoum@gmail.com', 'mourouj', 'Docteur'),

    ];
  }
}
