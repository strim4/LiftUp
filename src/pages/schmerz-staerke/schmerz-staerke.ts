import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pain } from '../../model/pain/pain.model';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SchmerzStaerkePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schmerz-staerke',
  templateUrl: 'schmerz-staerke.html',
})
export class SchmerzStaerkePage {
  pain: Pain = {
    plev: '',
    date: new Date,
  
    
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public firebaseProvider: FirebaseProvider) {
  }

  //Alarm beim Speichern
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }
//Funktion für das Speichern von Medis
  addPain(pain: Pain) {
   // this.mediListService.addMedication(medi);
   this.firebaseProvider.addPain(this.pain);
   this.presentAlert();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchmerzStaerkePage');
  }

}
