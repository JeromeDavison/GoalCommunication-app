import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  animations:[
  trigger('fadeInBox',
	 [
	 state('true', style({ opacity: 1 })),
	 state('false', style({ opacity:0})),
      transition('true <=> false', animate('300ms ease-in'))
    ])
  
  
  
  
  ]

})
export class SetupComponent implements OnInit {

  secondVal: boolean = false;
  constructor() { 
  }
  ngOnInit() {
  }

 
  
  
}
