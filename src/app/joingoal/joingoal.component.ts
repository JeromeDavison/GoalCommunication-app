import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-joingoal',
  templateUrl: './joingoal.component.html',
  styleUrls: ['./joingoal.component.css']
})
export class JoingoalComponent implements OnInit {

  constructor(public http: HttpClient) {
   this.requestCategories(this.url)
   }

  
   // create array holding all the categories
   
   Categories: any = {'Tech': [] , 'Food': [] ,'School' : [], 'misc': []};   /* 
	  
	  Tech{[
	  New Gadget {Name, postInfo},
	  Recreating diagram,
	  new Phone
	  upgrading syntax
	  ]}
	  */
	goalCount: number;
	goalSucc: string = "Goal joined!"
	goalFail: string = "Sorry, you have too many goals. Please delete atleast one and try again";
   urlGoal: string;
   viewGoalJoined: boolean; // reference button for goal joined
   url: string = "127.0.0.1:3000";
   
   // run an ajax aka http here or whatever call to setstate aka fill categories
    // http options first
	 httpOptions = {
     headers: new HttpHeaders({
	 'content':"application/json",
     'Content-Type':  'application/x-www-form-urlencoded'  })
     };
   
   
    requestCategories(url){
			  this.http.get('http://127.0.0.1:3000/',this.httpOptions).subscribe(res => console.log(res)); 

		 // this shit isnt tested my man!
	}
   // on load use a slide fade in animation,
    requestGoals(urlGoal){
			 this.http.get('http://127.0.0.1:3000/goalnum',this.httpOptions).subscribe(res => res.goalNum = this.goalNum)); 
	}
   goalCheck(){
	   if (this.goalCount > 3){
		   
		   // cannot submit new goal
	   }
	  
	   
	
	   
   } 
   // on click Show "Goal Joined!" mini screen and fade out.
    // render a new view ontop? or just show if something is true?
	
	
	
   // If user has over 3 goals, direct them to the deletion option 
     // have a deletion url 
       // confirm button 
   //
  ngOnInit() {
  }

}
