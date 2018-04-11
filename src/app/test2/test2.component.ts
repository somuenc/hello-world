import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  successClass = 'success';
  name = '';
  greeting = '';
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  greet(event) {
    console.log(event);
    this.greeting = '' + event.screenX + ' : ' + event.screenY;
  }

  LogMessage(value) {
    console.log(value);
  }
}
