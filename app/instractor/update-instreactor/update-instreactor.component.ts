import { instractor } from './../../models/instractor';
import { InstructorService } from './../../shared/instructor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-instreactor',
  templateUrl: './update-instreactor.component.html',
  styleUrls: ['./update-instreactor.component.css']
})
export class UpdateInstreactorComponent implements OnInit {
  errors;
  id;

object = new instractor;
  constructor(private serv : InstructorService , private route:Router, private activeRoute: ActivatedRoute) {

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
      this.route.navigateByUrl('il');
    })

}
}
