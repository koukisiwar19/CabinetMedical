import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    {path: '/gererpatients', title: ' Patients',icon:'', class: '' },
    {path : '/visite', title: 'Visite',icon:'',class: ''},
    { path: '/gereconsultation', title:' Consultation', icon: '', class:''},
    {path: '/gererpharmacie', title: ' Pharmacie ',icon:'',class:''},
    { path : '/formuledesatisfaction', title: 'Formulaire de Satisfaction', icon:'', class:''},
    { path: '/Profile', title: 'Profile',  icon:'', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: 'active active-pro' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
