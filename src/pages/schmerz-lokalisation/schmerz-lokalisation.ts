import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UebObRueckenPage } from '../ueb-ob-ruecken/ueb-ob-ruecken';
import { UebMitRueckenPage } from '../ueb-mit-ruecken/ueb-mit-ruecken';
import { UebUntRueckenPage } from '../ueb-unt-ruecken/ueb-unt-ruecken';

/**
 * Generated class for the SchmerzLokalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schmerz-lokalisation',
  templateUrl: 'schmerz-lokalisation.html',
})
export class SchmerzLokalisationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchmerzLokalisationPage');
  }

  btnClickedOR(){
    let alert = this.alertCtrl.create({
      title: 'Oberer Rücken',
      message: 'Sie haben Schmerzen im Bereich des oberen Rückens angegeben. Wir haben eine Übung für Sie bereit.',
      buttons: [
        
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
        }

        },

        {
          text:'Ok',
          handler: () => {
            console.log('Ok')
            this.navCtrl.push(UebObRueckenPage)
          }
        }  

      ]
    });

    alert.present();
  }

  btnClickedMR(){
    let alert = this.alertCtrl.create({
      title: 'Mittlerer Rücken',
      message: 'Sie haben Schmerzen im Bereich des mittleren Rückens angegeben. Wir haben eine Übung für Sie bereit.',
      buttons: [
        
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
        }

        },

        {
          text:'Ok',
          handler: () => {
            console.log('Ok')
            this.navCtrl.push(UebMitRueckenPage)
          }
        }  

      ]
    });

    alert.present();
  }

  btnClickedUR(){
    let alert = this.alertCtrl.create({
      title: 'Unterer Rücken',
      message: 'Sie haben Schmerzen im Bereich des unteren Rückens angegeben. Wir haben eine Übung für Sie bereit.',
      buttons: [
        
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
        }

        },

        {
          text:'Ok',
          handler: () => {
            console.log('Ok')
            this.navCtrl.push(UebUntRueckenPage)
          }
        }  

      ]
    });

    alert.present();
  }

}
