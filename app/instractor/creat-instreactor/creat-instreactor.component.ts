import { InstructorService } from './../../shared/instructor.service';
import { instractor } from './../../models/instractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-instreactor',
  templateUrl: './creat-instreactor.component.html',
  styleUrls: ['./creat-instreactor.component.css']
})
export class CreatInstreactorComponent implements OnInit {

  errors;

object = new instractor;
  constructor(private serv : InstructorService , private route:Router) { }

  ngOnInit(): void {
  }

  save(UserName,level,age){
    if(UserName.errors== null &&level.errors== null &&age.errors== null){
      this.serv.post(this.object).subscribe(data =>{
        this.route.navigateByUrl ("il");
      });
    }
    else{
      this.errors ="you must enter valid data"
    }


}


}
