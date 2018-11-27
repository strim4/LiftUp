import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {  AngularFireList } from "angularfire2/database"; 
import { Medi } from '../../model/medi/medi.model';



/**
 * Generated class for the MedikamentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medikamente',
  templateUrl: 'medikamente.html',
  providers: [FirebaseProvider]
})
export class MedikamentePage {
  medi: Medi = {
    title: '',
    dosierung: '',
    menge: '' ,
    date:  new Date
    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider) {
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedikamentePage');
  }

  addMedication(medi: Medi) {
   // this.mediListService.addMedication(medi);
   this.firebaseProvider.addMedication(this.medi);
  }

}
