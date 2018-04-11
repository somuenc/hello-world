import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {
  name = 'shweta';
  message = 'I Love you dummy';
  person = {
    'fn': 'Shweta',
    'ln': 'Konnur'
  };
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
