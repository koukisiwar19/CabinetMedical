import { DetailComponent } from './../../Profil/detail/detail.component';
import { ListComponent } from './../../Profil/list/list.component';
import { ProfileComponent } from './../../Profil/profile/profile.component';
import { Routes } from '@angular/router';
import {GererpatientsComponent} from '../../gererpatients/gererpatients.component'
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
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
    {path : 'visite', component: VisteComponent},
    {path : 'Profile', component: ProfileComponent},
    {path: 'list', component : ListComponent},
    {path : 'detail', component: DetailComponent},
    {path : 'profile', component : ProfileComponent},

];
