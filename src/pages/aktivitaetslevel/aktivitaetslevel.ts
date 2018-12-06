import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Actlev } from '../../model/actlev/actlev.model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AktivitaetslevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aktivitaetslevel',
  templateUrl: 'aktivitaetslevel.html',
})
export class AktivitaetslevelPage {
  actlev: Actlev = {
    actlev: '',
    date: new Date,
  
    
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public firebaseProvider: FirebaseProvider) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }

  addActivlevel(){
    this.firebaseProvider.addActLev(this.actlev);
    this.presentAlert();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AktivitaetslevelPage');
  }

}
