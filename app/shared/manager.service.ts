import { manager } from './../models/manager';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService  extends ApifunctionService <manager> {

  constructor(public http : HttpClient) {
    super("http://localhost:3000/manager" ,http)
  }
}

