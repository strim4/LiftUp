import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {  AngularFireList } from "angularfire2/database"; 
import { Medi } from '../../model/medi/medi.model';
import { AlertController } from 'ionic-angular';



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

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider) {
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedikamentePage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }

  addMedication(medi: Medi) {
   // this.mediListService.addMedication(medi);
   this.firebaseProvider.addMedication(this.medi);
   this.presentAlert();
  }

}
