import { Component } from '@angular/core';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

progressPercent:number = 0;
progressColor:String = 'red';

//responsible for changing progress color
changeProgressColor(){

  //Just to tryout the progress bar
  //bind it with inserted forms
  this.progressPercent= this.progressPercent + 20;


  //basic if based color change
if(this.progressPercent >= 100){
   this.progressPercent=100;
   this.progressColor = "blue";}
else if(this.progressPercent < 30) this.progressColor = "red";
else if(this.progressPercent < 70) this.progressColor = "yellow";
else if(this.progressPercent < 100) this.progressColor = "green";
}

}

