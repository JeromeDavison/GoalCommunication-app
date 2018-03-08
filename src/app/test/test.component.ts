import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'navbar-component-example', 
    templateUrl: 'navbar.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  title2: string = 'This is another giglrrrr';
  ngOnInit() {
  }

}
