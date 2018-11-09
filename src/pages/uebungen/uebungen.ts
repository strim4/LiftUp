import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UebArbeitsplatzPage } from '../ueb-arbeitsplatz/ueb-arbeitsplatz';
import { LockerungsUebPage } from '../lockerungs-ueb/lockerungs-ueb';
import { UebObRueckenPage } from '../ueb-ob-ruecken/ueb-ob-ruecken';
import { UebMitRueckenPage } from '../ueb-mit-ruecken/ueb-mit-ruecken';
import { UebUntRueckenPage } from '../ueb-unt-ruecken/ueb-unt-ruecken';
import { UebGanzRueckenPage } from '../ueb-ganz-ruecken/ueb-ganz-ruecken';
/**
 * Generated class for the UebungenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uebungen',
  templateUrl: 'uebungen.html',
})
export class UebungenPage {
  uebArbeitsplatzPage = UebArbeitsplatzPage;
  lockerungsUebPage = LockerungsUebPage;
  uebObRueckenPage = UebObRueckenPage;
  uebMitRueckenPage = UebMitRueckenPage;
  uebUntRueckenPage = UebUntRueckenPage;
  uebGanzRueckenPage = UebGanzRueckenPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UebungenPage');
  }

}
