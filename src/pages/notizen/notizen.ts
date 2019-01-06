import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note/note.model';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NotizenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notizen',
  templateUrl: 'notizen.html',
})
export class NotizenPage {
   //Datenmodell für die Notizen
   note: Note = {
    note: '',
    date: new Date,
  
    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public firebaseProvider: FirebaseProvider) {
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
//Funktion für das Speichern von Notizen
  addNote(note: Note) {
   // this.mediListService.addMedication(medi);
   this.firebaseProvider.addNote(this.note);
   this.presentAlert();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotizenPage');
  }

}
