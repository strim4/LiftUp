import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Act } from '../../model/act/act.model';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';

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

//Datenmodell für die Aktivitäten
export class AddactPage {
  act: Act = {
    title: '',
    
    
  };

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddactPage');
  }

  //Funktion für den Speichern Alarm
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }
 
  //Funktion für das Hinzufügen von Aktivitäten
  addAct(act: Act) {
    // this.mediListService.addMedication(medi);
    this.firebaseProvider.addAct(this.act);
    this.presentAlert();
   }

}
