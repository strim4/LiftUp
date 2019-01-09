import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import { database } from 'firebase';

declare let cordova: any;
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
  thour: number;
  tminute: number;
  tcount: number;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private localNotifications: LocalNotifications, public alertCtrl: AlertController) {
  
  }



  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
      title: this.data.title,
       text: this.data.description,
       //trigger: {at: new Date(date)},
       trigger: { every: { hour: this.thour, minute: this.tminute, second: 1 }, count: this.tcount },
       led: 'FF0000',
       sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Erinnerung!',
      subTitle: 'Die Erinnerung wurde erfolgreich hinzugefügt.',
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

   
ssubmit(){
  
  console.log(this.data);
  var date = new Date(this.data.date+" "+this.data.time);
 
 cordova.plugins.notification.local.schdule({
    text: 'Delayed ILocalNotification',
    //at: date,
   trigger: {at: new Date(date)},
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
