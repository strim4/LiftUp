import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Energy } from '../../model/energy/energy.model';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EnergiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-energie',
  templateUrl: 'energie.html',
})

export class EnergiePage {
  //Datenmodell für den Energielevel
  energy: Energy = {
    enlev: '',
    date: new Date,
  
    
  };

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnergiePage');
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
  addEnergy(energy: Energy) {
   // this.mediListService.addMedication(medi);
   this.firebaseProvider.addEnergy(this.energy);

   this.presentAlert();
  }



}
