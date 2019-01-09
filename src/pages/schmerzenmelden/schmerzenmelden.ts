import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SchmerzStaerkePage } from '../schmerz-staerke/schmerz-staerke';
import { SchmerzLokalisationPage } from '../schmerz-lokalisation/schmerz-lokalisation';
import { SchmerzeintraegePage } from '../schmerzeintraege/schmerzeintraege';
import { NotizenPage } from '../notizen/notizen';

/**
 * Generated class for the SchmerzenmeldenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schmerzenmelden',
  templateUrl: 'schmerzenmelden.html',
})
export class SchmerzenmeldenPage {

  myDate: String = new Date().toISOString();
  
  schmerzStaerkePage = SchmerzStaerkePage;
  schmerzLokalisationPage = SchmerzLokalisationPage;
  notizenPage = NotizenPage;
  schmerzeintraegePage = SchmerzeintraegePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchmerzenmeldenPage');
  }

  btnClickedInfo(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'Haben Sie Schmerzen? Geben Sie an wo und wie stark die Schmerzen sind. LiftUp schlägt Ihnen dazu passende Übungen vor.',
      buttons: ['OK']
    });
    alert.present();
  }

}
