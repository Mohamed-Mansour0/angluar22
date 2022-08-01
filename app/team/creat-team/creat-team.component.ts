import { TeamService } from './../../shared/team.service';
import { team } from './../../models/team';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-team',
  templateUrl: './creat-team.component.html',
  styleUrls: ['./creat-team.component.css']
})
export class CreatTeamComponent implements OnInit {

  errors;

object = new team;
  constructor(private serv : TeamService , private route:Router) { }

  ngOnInit(): void {
  }

  save(UserName,level,age){
    if(UserName.errors== null &&level.errors== null &&age.errors== null){
      this.serv.post(this.object).subscribe(data =>{
        this.route.navigateByUrl ("lt");
      });
    }
    else{
      this.errors ="you must enter valid data"
    }


}

}
