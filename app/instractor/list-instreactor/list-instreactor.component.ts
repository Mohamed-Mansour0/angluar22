import { InstructorService } from './../../shared/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-instreactor',
  templateUrl: './list-instreactor.component.html',
  styleUrls: ['./list-instreactor.component.css']
})
export class ListInstreactorComponent {

  alldata:[];
  constructor(private serv : InstructorService) {
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
