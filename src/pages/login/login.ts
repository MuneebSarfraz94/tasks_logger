import { Component } from '@angular/core';
import { Http} from '@angular/http';
import {HTTP} from '@ionic-native/http'
import {LoginProvider} from '../../providers/login/login'
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private loginProvider: LoginProvider, public navCtrl: NavController, public alertCtrl: AlertController) {}
  username:any;
  password:any;

  logForm(form){
    console.log(form);
    console.log("loginProvider being called")
    this.loginProvider.login(form.value.username, form.value.password).subscribe(response=>
      {
        const user = response.json().data 
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.navCtrl.setRoot(HelloIonicPage)
      },
      error =>
      {
        console.log(error.json())
        let alert = this.alertCtrl.create({
          title: 'ALERT!',
          subTitle: error.json().errors[0],
          buttons: ['OK']
        });
        alert.present( )
      }
    )
    
    // this.loginProvider.login('user@example.com','monkey67')
  

  }

  
}
