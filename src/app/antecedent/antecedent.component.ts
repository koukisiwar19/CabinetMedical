import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AntecedentService } from './services/antecedent.service';

@Component({
  selector: 'app-antecedent',
  templateUrl: './antecedent.component.html',
  styleUrls: ['./antecedent.component.css']
})
export class AntecedentComponent implements OnInit {

  constructor(private antecedentservice : AntecedentService,
              private router : Router,
              private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  addAntecedent(formulaire : NgForm)
  {
    this.antecedentservice.addAntecedent(formulaire.value).subscribe(
      (Antecedent) => {
        this.toaster.success(
          `La Maladie ${Antecedent.maladie}   a été ajouté avec succès`
        );
        this.router.navigate(['antécédent']);
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
