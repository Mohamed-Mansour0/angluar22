import { Student } from './../models/Student';
import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from 'src/app/shared/apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApifunctionService <Student>{

  constructor(public http : HttpClient) {
    super("http://localhost:3000/student" ,http)
  }
}
