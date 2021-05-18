import { DetailComponent } from './../../Profil/detail/detail.component';
import { ListComponent } from './../../Profil/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { GererpatientsComponent } from '../../gererpatients/gererpatients.component';
import { GereconsultationComponent } from '../../gereconsultation/gereconsultation.component';
import { GererpharmacieComponent } from '../../gererpharmacie/gererpharmacie.component';
import { FormuledesatisfactionComponent } from '../../formuledesatisfaction/formuledesatisfaction.component';
import { VisteComponent } from '../../viste/viste.component';
import {ProfileComponent } from '../../Profil/profile/profile.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    GererpatientsComponent,
    GereconsultationComponent,
    GererpharmacieComponent,
    FormuledesatisfactionComponent,
    VisteComponent,
    ProfileComponent,
    ListComponent,
    DetailComponent,




  ]
})

export class AdminLayoutModule {}
