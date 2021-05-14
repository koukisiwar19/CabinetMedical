import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {GererpatientsComponent} from '../../gererpatients/gererpatients.component';
import { GereconsultationComponent } from '../../gereconsultation/gereconsultation.component';
import { from } from 'rxjs';
import { GererpharmacieComponent } from '../../gererpharmacie/gererpharmacie.component';
import { FormuledesatisfactionComponent } from '../../formuledesatisfaction/formuledesatisfaction.component';
import { VisteComponent } from '../../viste/viste.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path : 'gererpatients', component : GererpatientsComponent},
    {path : 'gereconsultation', component :GereconsultationComponent},
    {path :'gererpharmacie', component: GererpharmacieComponent},
    {path : 'formuledesatisfaction', component:FormuledesatisfactionComponent},
    {path : 'visite', component: VisteComponent}
    
];
