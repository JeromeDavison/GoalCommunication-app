 import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 

  constructor(private fb: FormBuilder, private http: HttpClient) {
   this.createForm();	
   }
    formName: FormGroup;
  username:string;
  password:string;
  subUser:string;
  subPass:string;
  logOrReg:boolean = true;
  logOrRegString: string = 'login';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

  params = new HttpParams().set('username', 'jorn');
   loginOrRegister (e){ // switch between login and register 
	  e.preventDefault();
	  if(this.logOrReg == true){
		   this.logOrReg = false;
		   this.logOrRegString =  'login';
	   } else if (this.logOrReg == false){
		   this.logOrRegString = 'registration';
		   this.logOrReg = true;
		   
	   }
	   
   }
   
  createForm(){ // form validation 
	  this.formName = this.fb.group({
		 username:['', [Validators.required, Validators.minLength(5)]],
         password:['', [Validators.required, Validators.minLength(5)]]   
	  });
  }
 ngOnInit()
     {
     }
  
  
  postSubmit(val){ // send the post 
	
	  // make http request postSubmit
	  this.http.post("http://127.0.0.1:3000/goalnum" , {username:val.username, password: val.password}, this.httpOptions).subscribe((res) => { console.log(res)},
	  response => {
  console.log(response)},
 () => {
	  
	console.log("win");  
  })

	  
	  
  }
  

}
