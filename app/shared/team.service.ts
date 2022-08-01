import { team } from './../models/team';
import { Injectable } from '@angular/core';
import { ApifunctionService } from './apifunction.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends ApifunctionService <team> {

  constructor(public http : HttpClient) {
    super("http://localhost:3000/team" ,http)
  }
}
