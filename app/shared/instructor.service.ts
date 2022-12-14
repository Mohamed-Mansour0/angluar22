import { instractor } from './../models/instractor';
import { ApifunctionService } from 'src/app/shared/apifunction.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorService extends ApifunctionService <instractor>{

  constructor(public http : HttpClient) {
    super("http://localhost:3000/instructor" ,http)
  }
}
