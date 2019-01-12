import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';



/**
 * Generated class for the ErinnerungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-erinnerung',
  templateUrl: 'erinnerung.html',
})
export class ErinnerungPage {
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private localNotifications: LocalNotifications, public alertCtrl: AlertController) {
  
  }


// Daily Reminder Morning
  drm() {
    
    
   
    this.localNotifications.schedule({
      title: "Let's move",
       text: "Hast du dich heute schon genügend bewegt? Wenn nicht, dann ist es jetzt an der Zeit! Be active ;)",
       //trigger: {at: new Date(date)},
       trigger: { every: { hour: 10, minute: 0, second: 1 }, count: 30 },
       led: 'FF0000',
       sound: null,
    });
    let alert = this.alertCtrl.create({
      title: 'Erinnerung!',
      subTitle: 'Die Erinnerung wurde erfolgreich hinzugefügt. Sie wird jeweils am Morgen um 10:00 Uhr ausgelöst',
      buttons: ['OK']
    });
    alert.present();
 
  }

  //Daily Reminder Afternoon
  dra() {
    
    
   
    this.localNotifications.schedule({
      title: "Let's move",
       text: "Hast du dich heute schon genügend bewegt? Wenn nicht, dann ist es jetzt an der Zeit! Be active ;)",
       //trigger: {at: new Date(date)},
       trigger: { every: { hour: 15, minute: 0, second: 1 }, count: 30 },
       led: 'FF0000',
       sound: null,
    });
    let alert = this.alertCtrl.create({
      title: 'Erinnerung!',
      subTitle: 'Die Erinnerung wurde erfolgreich hinzugefügt. Sie wird jeweils am Nachmittag um 15:00 Uhr ausgelöst',
      buttons: ['OK']
    });
    alert.present();
 
  }

   //Erinnerung alle 2 Stunden
   hra() {
    
    
   
    this.localNotifications.schedule({
      title: "Let's move",
       text: "Hast du dich heute schon genügend bewegt? Wenn nicht, dann ist es jetzt an der Zeit! Be active ;)",
       trigger: {every: {hour: 2}},
       //trigger: {at: new Date(date)},
     
     
       led: 'FF0000',
       sound: null,
    });
    let alert = this.alertCtrl.create({
      title: 'Erinnerung!',
      subTitle: 'Die Erinnerung wurde erfolgreich hinzugefügt. Sie wird alle zwei Stunden ausgelöst',
      buttons: ['OK']
    });
    alert.present();
 
  }

  // Erinnerungen stoppen
  cancle(){
   
    this.localNotifications.cancelAll();
    let alert = this.alertCtrl.create({
      title: 'Erinnerungen gestoppt!',
      subTitle: 'LiftUp versendet nun keine Erinnerungen mehr!',
      buttons: ['OK']
    });
    alert.present();
  }


   


//Alte Methode
set(){
  
  this.localNotifications.schedule({
    text: 'Delayed ILocalNotification',
    trigger: {at: new Date(new Date().getTime() + 3600)},
    led: 'FF0000',
    sound: null
 });
}

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErinnerungPage');
  }

}
