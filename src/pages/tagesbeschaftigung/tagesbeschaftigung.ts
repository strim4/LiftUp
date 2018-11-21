import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddactPage } from '../addact/addact';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import { Act } from '../../model/act/act.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

/**
 * Generated class for the TagesbeschaftigungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tagesbeschaftigung',
  templateUrl: 'tagesbeschaftigung.html',
  providers: [FirebaseProvider]
})
export class TagesbeschaftigungPage {
    addactPage = AddactPage;
    actList: Observable<Act[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public afd: AngularFireDatabase) {
   
    this.actList = afd.list<Act>('act-list').valueChanges();
  }

  

    
  

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagesbeschaftigungPage');
  }


}