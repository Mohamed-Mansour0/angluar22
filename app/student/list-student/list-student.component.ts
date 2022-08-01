import { StudentService } from './../../shared/student.service';
import { ApifunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
alldata:[];
  constructor(private serv : StudentService) {
    this.serv.get().subscribe((data:any)=>{
      this.alldata=data
    })
}
remove($id){
  this.serv.delete($id).subscribe(data =>{
    location.reload();
  })
 }



}
