import { Component } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent {

expand:boolean=false;

expandPersonal(){
  this.expand = !this.expand;
}




}
