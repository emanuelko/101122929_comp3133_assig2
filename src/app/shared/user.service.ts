import { Injectable } from '@angular/core';
import { User } from './models/user';
import { sample_user } from '../../data';
import { Employee } from './models/employee';
import { sample_employee } from '../../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(BASE_URL)
  }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(BASE_URL)
  }
}
