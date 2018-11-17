import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {  AngularFireList } from "angularfire2/database"; 


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
})
export class MedikamentePage {
medis: AngularFireList<any[]>;
mediName ='';
mediDos = '';
mediMeng = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider) {
  
  }
  addMedi(){
    this.firebaseProvider.addMedi(this.mediName, this.mediDos, this.mediMeng);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedikamentePage');
  }

}
