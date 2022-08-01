import { TeamService } from './../../shared/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent {


  alldata:[];
  constructor(private serv : TeamService) {
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
