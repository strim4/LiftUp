import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import {FirebaseListObservable} from 'angularfire2/database-deprecated'

import { Medi } from '../../model/medi/medi.model';
import { Energy } from '../../model/energy/energy.model';
import { Actlev } from '../../model/actlev/actlev.model';
import { map } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import {AngularFireObject} from 'angularfire2/database';


/**
 * Generated class for the TagebucheintraegePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tagebucheintraege',
  templateUrl: 'tagebucheintraege.html',
  providers: [FirebaseProvider]
})
export class TagebucheintraegePage {

  mediList: Observable<Medi[]>;
  energyList: Observable<Energy[]>;
  actlevList: Observable<Actlev[]>;
 

  
  constructor(public navCtrl: NavController, public afd: AngularFireDatabase,private firebaseProvider: FirebaseProvider, public navParams: NavParams) {

this.mediList = afd.list<Medi>('medi-list').valueChanges();
this.energyList = afd.list<Energy>('energy-list').valueChanges();
this.actlevList = afd.list<Actlev>('actlev-list').valueChanges();


  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TagebucheintraegePage');
  }

}

