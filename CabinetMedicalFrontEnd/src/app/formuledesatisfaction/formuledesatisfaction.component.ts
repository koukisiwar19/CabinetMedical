import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormulaireserviceService } from './services/formulaireservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formuledesatisfaction',
  templateUrl: './formuledesatisfaction.component.html',
  styleUrls: ['./formuledesatisfaction.component.css']
})
export class FormuledesatisfactionComponent implements OnInit {

  constructor(private formulaireservice : FormulaireserviceService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  addFormulaire(formulaire : NgForm) {
    this.formulaireservice.addFormulaire(formulaire.value).subscribe(
      (formulaire) => {
        this.toaster.success(
          `Le formulaire de Satisfaction ${formulaire.ID}  a été ajouté avec succès`
        );
        this.router.navigate(['formulaire']);
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
