import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})




export class AppComponent {
	 
   name:string[] = [];
  age:number;
  newClass: string = "thisisClass";
  found:boolean;
  links:string[] = ['gone', 'gone2', 'gone3'];
  constructor(private httpClient:HttpClient){ 
  
	
	

  }
  
  getDepth(myOut){
	  return myOut.activatedRouteData.animation;
	  
	  
  }
  
		  
}
