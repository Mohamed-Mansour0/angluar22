import { ManagerService } from './../../shared/manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {

  alldata:[];
  constructor(private serv : ManagerService) {
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
