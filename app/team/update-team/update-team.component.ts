import { TeamService } from './../../shared/team.service';
import { team } from './../../models/team';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  errors;
  id;

object = new team;
  constructor(private serv : TeamService , private route:Router, private activeRoute: ActivatedRoute) {

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
      this.route.navigateByUrl('lt');
    })

}

}
