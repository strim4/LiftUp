import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Act } from '../../model/act/act.model';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the AddactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addact',
  templateUrl: 'addact.html',
  providers: [FirebaseProvider]
})
export class AddactPage {
  act: Act = {
    title: '',
    
    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddactPage');
  }

  addAct(act: Act) {
    // this.mediListService.addMedication(medi);
    this.firebaseProvider.addAct(this.act);
   }

}
