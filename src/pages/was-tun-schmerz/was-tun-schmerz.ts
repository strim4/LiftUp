import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchmerzMediPage } from '../schmerz-medi/schmerz-medi';

/**
 * Generated class for the WasTunSchmerzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-was-tun-schmerz',
  templateUrl: 'was-tun-schmerz.html',
})
export class WasTunSchmerzPage {
  schmerzMediPage = SchmerzMediPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WasTunSchmerzPage');
  }

}
