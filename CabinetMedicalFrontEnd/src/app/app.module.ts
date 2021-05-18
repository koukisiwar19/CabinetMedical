import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GererpatientsComponent } from './gererpatients/gererpatients.component';
import { GereconsultationComponent } from './gereconsultation/gereconsultation.component';
import { GererpharmacieComponent } from './gererpharmacie/gererpharmacie.component';
import { FormuledesatisfactionComponent } from './formuledesatisfaction/formuledesatisfaction.component';
import { VisteComponent } from './viste/viste.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './Profil/profile/profile.component';
import { DetailComponent } from './Profil/detail/detail.component';
import { ListComponent } from './Profil/list/list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,





  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
