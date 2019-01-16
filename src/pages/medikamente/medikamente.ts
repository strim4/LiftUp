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
  //Datenmodell für die Medikamente
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
//Alarm beim Speichern
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }
// Medikament speichern
  addMedication(medi: Medi) {
   // this.mediListService.addMedication(medi);
   this.firebaseProvider.addMedication(this.medi);
   this.presentAlert();
  }
  //Funktion für Info-Button
    btnClickedInfo(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'Hier können Sie die eingenommenen Medikamente eingeben. Die Dosierung gilt für die eingenommene Einheit. D.h. eine Tablette Aspirin à 500mg. Wenn Sie dann zwei Tabletten genommen haben, haben Sie im Total 1g Aspirin eingenommen.',
      buttons: ['OK']
    });
    alert.present();
  }

}
