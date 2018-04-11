import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Pranavi', email: 'PSK@gmail.com', age: 4 },
    { id: 2, name: 'Soma', email: 'sbk@gmail.com', age: 36 },
    { id: 3, name: 'Shweta', email: 'ssk@gmail.com', age: 30 },
    { id: 4, name: 'Pritvi', email: 'psk@gmail.com', age: 1 }
  ];

  constructor() { }

  getEmployees(): Observable<Array<any>> {
    return Observable.create(o => o.next(this.employees));
  }

  getEmployeeById(id): Observable<any> {
    const employee = this.employees.find(e => e.id === id);
    return Observable.create(o => o.next(employee));
  }

}
