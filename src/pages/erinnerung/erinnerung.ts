import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import { LocalNotifications } from '@ionic-native/local-notifications';

declare var cordova;
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
  data = { title:'', description:'', date:'', time:'' };
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private localNotifications: LocalNotifications, public alertCtrl: AlertController) {
  
  }

  submit() {
    console.log(this.data);
    let date = new Date(this.data.date+" "+this.data.time);
    
    console.log(date);
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       
       trigger: {at: new Date(new Date(date))},
       led: 'FF0000',
       sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
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
