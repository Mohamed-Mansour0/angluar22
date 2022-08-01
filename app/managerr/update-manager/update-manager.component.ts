import { ManagerService } from './../../shared/manager.service';
import { manager } from './../../models/manager';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {

  errors;
  id;

object = new manager;
  constructor(private serv : ManagerService , private route:Router, private activeRoute: ActivatedRoute) {

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
      this.route.navigateByUrl('lm');
    })

}

}
