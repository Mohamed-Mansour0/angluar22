import { StudentService } from './../../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { ApifunctionService } from 'src/app/shared/apifunction.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  errors;
  id;

object = new Student;
  constructor(private serv : StudentService , private route:Router, private activeRoute: ActivatedRoute) {

   this.id= this.activeRoute.snapshot.paramMap.get('id');
   console.log(this.id);
   this.serv.getbyId(this.id).subscribe((data:any)=>{
    this.object=data;
   })
  }

  ngOnInit(): void {
  }

  update(){

    this.serv.put(this.object, this.id).subscribe(data =>{
      this.route.navigateByUrl('ls');
    })

}

}
