import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UebungenPage } from '../uebungen/uebungen';
import { ErgonomiePage } from '../ergonomie/ergonomie';
import { WarumBewegungPage } from '../warum-bewegung/warum-bewegung';
import { WasTunSchmerzPage } from '../was-tun-schmerz/was-tun-schmerz';

/**
 * Generated class for the BeactivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beactive',
  templateUrl: 'beactive.html',
})
export class BeactivePage {
  uebungenPage = UebungenPage;
  ergonomiePage = ErgonomiePage;
  warumBewegungPage = WarumBewegungPage;
  wasTunSchmerzPage = WasTunSchmerzPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeactivePage');
  }

}
