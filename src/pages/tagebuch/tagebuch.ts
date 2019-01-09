import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TagesbeschaftigungPage } from '../tagesbeschaftigung/tagesbeschaftigung';
import { EnergiePage } from '../energie/energie';
import { AktivitaetslevelPage } from '../aktivitaetslevel/aktivitaetslevel';
import { MedikamentePage } from '../medikamente/medikamente';
import { TagebucheintraegePage } from '../tagebucheintraege/tagebucheintraege';

/**
 * Generated class for the TagebuchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tagebuch',
  templateUrl: 'tagebuch.html',
})
export class TagebuchPage {
 
  myDate: String = new Date().toISOString();

  tagesbeschaftigungPage = TagesbeschaftigungPage;
  energiePage = EnergiePage;
  aktivitaetslevelPage = AktivitaetslevelPage;
  medikamentePage = MedikamentePage;
  tagebucheintraegePage = TagebucheintraegePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagebuchPage');
  }

  btnClickedInfo(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'Erstellen Sie hier Ihre Tagebucheinträge. Was haben Sie vorgängig am Tag gemacht, wie aktiv waren Sie? Haben Sie Medikamente genommen? Die Angaben werden für die statistische Auswertung benutzt. Diese finden Sie unter Analyse.',
      buttons: ['OK']
    });
    alert.present();
  }

}
