import { MedicamentsService } from './services/medicaments.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  constructor(private medicamentsservice: MedicamentsService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  addMedicament(formulaire : NgForm) {
    this.medicamentsservice. addMedicament(formulaire.value).subscribe(
      (Medicaments) => {
        this.toaster.success(
          ` Le Médicament ${Medicaments.nomMedicament}   a été ajouté avec succès`
        );
        this.router.navigate(['medicaments']);
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
