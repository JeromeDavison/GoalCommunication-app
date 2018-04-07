import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {InterceptorModule} from './interceptor.module';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupComponent } from './setup/setup.component';
import { SetgoalComponent } from './setgoal/setgoal.component';
import { JoingoalComponent } from './joingoal/joingoal.component';
import { RouterModule, Routes } from '@angular/router';


  const routes: Routes = [
	{path: 'login', component: LoginComponent, data:{ animation:1 }},	
	{path: 'setup', component: SetupComponent ,data: { animation : 2 }},	
	{path: 'join', component: JoingoalComponent ,data: { animation: 2 }},	

]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SetupComponent,
    SetgoalComponent,
    JoingoalComponent
  ],
  imports: [
    BrowserModule,
    InterceptorModule,
	HttpModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	HttpModule,
	BrowserModule,
	BrowserAnimationsModule,
    RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
