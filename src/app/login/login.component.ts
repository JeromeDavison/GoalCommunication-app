  import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formName: FormGroup;
  username:string;
  password:string;
  subUser:string;
  subPass:string;
  httpOptions = {
  headers: new HttpHeaders({
	 'content':"application/json",
     'Content-Type':  'application/x-www-form-urlencoded'  })
};
  constructor(private fb: FormBuilder, public http: HttpClient) {
   this.catch1();
   this.createForm();	
   }

   fall: string;
   ngOnInit(){
	   
   }
   catch1(){
	 
   }
   
   
  createForm(){
	  this.formName = this.fb.group({
		 username:['', [Validators.required, Validators.minLength(5)]],
         password:['', [Validators.required, Validators.minLength(5)]]   
	  });
	  
  }
  
 
  
  
  postSubmit(val){
	  this.username = val.username
	  console.log(this.subUser);
	  this.password = val.password;
	  // make http request postSubmit
	  this.http.post("http://127.0.0.1:3000/", {user: this.username, pass:this.password} ,this.httpOptions).subscribe(res => console.log(res)); 

	  
	  
  }
  

}
