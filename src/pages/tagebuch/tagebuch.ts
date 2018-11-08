import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TagesbeschaftigungPage } from '../tagesbeschaftigung/tagesbeschaftigung';
import { EnergiePage } from '../energie/energie';
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
 
  myDate: String = new Date().toISOString();

  tagesbeschaftigungPage = TagesbeschaftigungPage;
  energiePage = EnergiePage;
  aktivitaetslevelPage = AktivitaetslevelPage;
  medikamentePage = MedikamentePage;

 
 
 

 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagebuchPage');
  }

}
