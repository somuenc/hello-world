import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {
  private employees = [];
  url = '/assets/data/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<any>> {
    return Observable.create(o => o.next(this.employees));
  }

  getEmployeeById(id): Observable<any> {
    const employee = this.employees.find(e => e.id === id);
    return Observable.create(o => o.next(employee));
  }

  getEmployeesFromFile(): Observable<Array<IEmployee>> {
    return this.http.get<Array<IEmployee>>(this.url)
      .catch(this.errorHandler);
  }

  getUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users')
      .catch(this.errorHandler);
  }

  getPosts(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts2')
      .catch(this.errorHandler);
  }

  getValues(): Observable<any> {
    return this.http.get('http://localhost:52009/api/values/145')
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
