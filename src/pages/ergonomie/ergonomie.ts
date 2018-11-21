import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StuhlPage } from '../stuhl/stuhl';
import { TischPage } from '../tisch/tisch';
import { BildschirmPage } from '../bildschirm/bildschirm';
import { NotebookPage } from '../notebook/notebook';

/**
 * Generated class for the ErgonomiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ergonomie',
  templateUrl: 'ergonomie.html',
})
export class ErgonomiePage {
  stuhlPage = StuhlPage;
  tischPage = TischPage;
  bildschirmPage = BildschirmPage;
  notebookPage = NotebookPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErgonomiePage');
  }

}
