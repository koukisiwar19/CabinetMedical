import { PharmacieserviceService } from './service/pharmacieservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gererpharmacie',
  templateUrl: './gererpharmacie.component.html',
  styleUrls: ['./gererpharmacie.component.css']
})
export class GererpharmacieComponent implements OnInit {

  constructor( private pharmacieservice: PharmacieserviceService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  addMedicament(formulaire : NgForm) {
    this.pharmacieservice. addMedicament(formulaire.value).subscribe(
      (Medicament) => {
        this.toaster.success(
          ` Le Médicament ${Medicament.nom}   a été ajouté avec succès`
        );
        this.router.navigate(['medicament']);
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
