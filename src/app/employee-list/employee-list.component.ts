import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: any;
  employees = [];
  displayEmployee = false;
  users: Array<any> = [];
  posts: Array<any> = [];
  response: any;
  errorMsg = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployeesFromFile()
      .subscribe(resp => {
        this.employees = resp;
      },
      error => this.errorMsg = error);
  }

  setId(e) {
    this.employee = e;
    this.displayEmployee = true;
  }

  getUsers() {
    this._employeeService.getUsers()
      .subscribe(data => this.users = data,
        error => this.errorMsg = error);
  }

  getPosts() {
    this._employeeService.getPosts()
      .subscribe(data => {
        this.posts = data.filter(p => p.id && p.id <= 20);
      },
      error => this.errorMsg = error);
  }

  getValues() {
    this._employeeService.getValues()
    .subscribe(data => this.response = data,
      error => this.errorMsg = error);
  }
}
