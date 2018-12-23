import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Act } from '../../model/act/act.model';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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

  userId: string;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public alertCtrl: AlertController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
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
