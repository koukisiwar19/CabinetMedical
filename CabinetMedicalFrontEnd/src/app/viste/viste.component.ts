import { Component, OnInit } from '@angular/core';

import 'fullcalendar';
declare var $: any;
@Component({
  selector: 'app-viste',
  templateUrl: './viste.component.html',
  styleUrls: ['./viste.component.css']
})
export class VisteComponent implements OnInit {

  
  ngOnInit() {
    setTimeout(() => {
     $("#calendar").fullCalender({  
                      header: {
                          left   : 'prev,next today',
                          center : 'title',
                          right  : 'month,agendaWeek,agendaDay'
                      },
                      navLinks   : true,
                      editable   : true,
                      eventLimit : true,
                      events: [
                          {
                              title : 'This is your',
                              start : '2020-03-03T12:30:00',
                              color : '#f9c66a' // override!
                          },
                          {
                              title : 'Your meeting with john',
                              start : '2020-03-07T12:30:00',
                              end   : '2019-03-09',
                              color : "#019efb"
                          },
                          {
                              title  : 'This is Today',
                              start  : '2020-03-12T12:30:00',
                              allDay : false, // will make the time show,
                              color  : "#57cd5f"
                          }
                      ],  // request to load current events
                  });
   }, 100);
 }

  }
   





