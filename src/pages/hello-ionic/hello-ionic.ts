import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }
  tasks = [];
  task:any;

  add(){
    this.tasks.push(
      this.task
    );
    this.task=""
  }

  navigateHome(){
    this.navCtrl.push(HelloIonicPage)
  }
}
