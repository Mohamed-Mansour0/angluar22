import { ManagerService } from './../../shared/manager.service';
import { manager } from './../../models/manager';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-manager',
  templateUrl: './creat-manager.component.html',
  styleUrls: ['./creat-manager.component.css']
})
export class CreatManagerComponent implements OnInit {

  errors;

object = new manager;
  constructor(private serv : ManagerService , private route:Router) { }

  ngOnInit(): void {
  }

  save(UserName,level,age){
    if(UserName.errors== null &&level.errors== null &&age.errors== null){
      this.serv.post(this.object).subscribe(data =>{
        this.route.navigateByUrl ("lm");
      });
    }
    else{
      this.errors ="you must enter valid data"
    }


}


}
