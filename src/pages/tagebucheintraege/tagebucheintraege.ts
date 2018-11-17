import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the TagebucheintraegePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tagebucheintraege',
  templateUrl: 'tagebucheintraege.html',
})
export class TagebucheintraegePage {
  medis :AngularFireList<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  
  
    this.medis = this.firebaseProvider.getMedi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagebucheintraegePage');
  }

}

