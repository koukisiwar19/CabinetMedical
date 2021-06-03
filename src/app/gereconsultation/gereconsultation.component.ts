import { ConsultationserviceService } from './../gereconsultation/services/consultationservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gereconsultation',
  templateUrl: './gereconsultation.component.html',
  styleUrls: ['./gereconsultation.component.css']
})
export class GereconsultationComponent implements OnInit {

  constructor( private consultationservice : ConsultationserviceService,
    private router: Router,
    private toaster: ToastrService) {}


 ngOnInit(): void{
 }
 addConsultation(formulaire : NgForm) {
  this.consultationservice.addConsultation(formulaire.value).subscribe(
    (consultation) => {
      this.toaster.success(
        `La Consultation du date ${consultation.date_visite}  a été ajouté avec succès`
      );
      this.router.navigate(['consultation']);
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
