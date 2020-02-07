import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-angular',
  templateUrl: './welcome-angular.component.html',
  styleUrls: ['./welcome-angular.component.scss']
})
export class WelcomeAngularComponent implements OnInit {

  public title:string = 'Click desde component de Angular';
  public message:string = 'Este alert llega desde Angular con Custom Element';
  constructor() { }

  ngOnInit() {
  }

  showAlert(){
    alert(this.message)
  }


}
