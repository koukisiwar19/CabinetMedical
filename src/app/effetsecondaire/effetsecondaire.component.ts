import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EffetSecondaireService } from './services/effet-secondaire.service';

@Component({
  selector: 'app-effetsecondaire',
  templateUrl: './effetsecondaire.component.html',
  styleUrls: ['./effetsecondaire.component.css']
})
export class EffetsecondaireComponent implements OnInit {

  constructor( private effetsecondaire : EffetSecondaireService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  addEffetSeconaire(formulaire : NgForm)
  {
    this.effetsecondaire.addEffetSecondaire(formulaire.value).subscribe(
      (effetsecondaire) => {
        this.toaster.success(
          `L'effet Secondaire  ${effetsecondaire.nom}   a été ajouté avec succès`
        );
        this.router.navigate(['effetSecondaire']);
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
