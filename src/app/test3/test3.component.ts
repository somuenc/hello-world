import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  displayName = true;
  color = 'green';

  colors = ['red', 'green', 'yellow', 'orange'];

  constructor() { }

  ngOnInit() {
  }

}
