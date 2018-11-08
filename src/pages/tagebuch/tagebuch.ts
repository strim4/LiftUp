import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnergiePage } from '../energie/energie';
import { TagesbeschaftigungPage } from '../tagesbeschaftigung/tagesbeschaftigung';
import { AktivitaetslevelPage } from '../aktivitaetslevel/aktivitaetslevel';
import { MedikamentePage } from '../medikamente/medikamente';

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
  energiePage = EnergiePage;
  tagesbeschaftigungPage= TagesbeschaftigungPage;
  aktivitaetslevelPage = AktivitaetslevelPage;
  medikamentePage = MedikamentePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagebuchPage');
  }

}
