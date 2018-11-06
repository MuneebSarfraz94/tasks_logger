import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav,AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapPage } from '../pages/map/map';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  
  rootPage:any
  activeUser:any
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.activeUser =  localStorage.getItem('currentUser');
    console.log(this.activeUser)
    console.log(localStorage.getItem('currentUser'))
    if(this.activeUser){
      this.rootPage = HelloIonicPage
    }else{
      this.rootPage = LoginPage
    }
    // set our app's pages
    this.pages = [
      { title: 'ToDo List', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Maps', component: MapPage },


    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.activeUser = localStorage.getItem('currentUser')
    // navigate to the new page if it is not the current page
    if(this.activeUser){
      this.nav.setRoot(page.component);
    }else{
      if(page.component.name === 'LoginPage'){
        this.nav.setRoot(page.component);
       }else{
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: "Please login to view this panel",
          buttons: ['OK']
        });
        alert.present( );  
      }
    }
    
  }
}
