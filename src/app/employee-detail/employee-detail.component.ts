import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input()
  employee: any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
