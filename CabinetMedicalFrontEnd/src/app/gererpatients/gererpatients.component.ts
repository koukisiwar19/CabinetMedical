
import { PatientserviceService } from './services/patientservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from './patients/patient';

@Component({
  selector: 'app-gererpatients',
  templateUrl: './gererpatients.component.html',
  styleUrls: ['./gererpatients.component.css']
})
export class GererpatientsComponent implements OnInit {

  constructor(  private patientservice: PatientserviceService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  addPatient(formulaire : NgForm) {
    this.patientservice.addPatient(formulaire.value).subscribe(
      (Patient) => {
        this.toaster.success(
          `Le Patient de ${Patient.nom} ${Patient.prenom}  a été ajouté avec succès`
        );
        this.router.navigate(['patient']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Vérifier Vos données `
        );
      }
    );

  }
}
