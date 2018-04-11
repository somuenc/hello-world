import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('parentData')
  public name;

  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    this.childEvent.emit('This hello from Soma');
  }
}
