import { StudentService } from './../../shared/student.service';
import { Student } from './../../models/Student';
import { ApifunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent implements OnInit {
  errors;

object = new Student;
  constructor(private serv : StudentService , private route:Router) { }

  ngOnInit(): void {
  }

  save(UserName,level,age){
    if(UserName.errors== null &&level.errors== null &&age.errors== null){
      this.serv.post(this.object).subscribe(data =>{
        this.route.navigateByUrl ("ls");
      });
    }
    else{
      this.errors ="you must enter valid data"
    }


  }

}
