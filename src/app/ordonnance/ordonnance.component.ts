import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdonnanceService } from './services/ordonnance.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit {

  constructor(private ordonnanceservice : OrdonnanceService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  addOrdonnance(formulaire : NgForm){
    this.ordonnanceservice.addOrdonnance(formulaire.value).subscribe(
      (Ordonnance) => {
        this.toaster.success(
          `le ordonnance de ${Ordonnance.nompatient} à été ajouté avec succès`
        );
        this.router.navigate(['ordonnances']);
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
