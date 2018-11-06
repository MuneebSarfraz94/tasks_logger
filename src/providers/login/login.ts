import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {HTTP} from '@ionic-native/http';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello LoginProvider Provider');
  }
   login(email,password){
    const body = {email: email, password: password}
   return  this.http.post('http://10.28.83.53:3000/auth/sign_in', body)
  }


}
