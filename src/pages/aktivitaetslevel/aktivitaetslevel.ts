import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';

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
activLevel = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  addActivlevel(){
    this.firebaseProvider.addActivlevel(this.activLevel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AktivitaetslevelPage');
  }

}
