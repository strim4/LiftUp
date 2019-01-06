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
  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private localNotifications: LocalNotifications, alertCtrl: AlertController) {
  
  }

  submit(){
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
      text: 'Verzögert',
      
      trigger: {every: { hour: 17, minute: 41, second: 15 }, count: 1 },
      led: 'FF0000',
      sound: null
   });
  }

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
