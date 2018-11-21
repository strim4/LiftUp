import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Medi } from '../../model/medi/medi.model';
import { Act } from '../../model/act/act.model';
import {Observable} from 'rxjs';
import { Reference } from '@firebase/database-types';
import {FirebaseListObservable} from 'angularfire2/database-deprecated'
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  private mediListRef = this.afd.list<Medi>('medi-list');
  private actListRef = this.afd.list<Act>('act-list');
  private ml = this.afd.list('medi-list');

  constructor(public http: HttpClient, public afd: AngularFireDatabase, private alertCtrl: AlertController) {
   
  }


  savedAlert() {
    let alert = this.alertCtrl.create({
      title: 'Gespeichert!',
      subTitle: 'Der neue Eintrag wurde gespeichert',
      buttons: ['Ok']
    });
    alert.present();
  }
  




addMedication(medi: Medi) {
  return this.mediListRef.push(medi);
 // this.afd.list('/medis-list/').push(medi);
}

addAct(act: Act) {
  return this.actListRef.push(act);
 // this.afd.list('/medis-list/').push(medi);
}

getMedicationList() {
  return this.mediListRef.valueChanges();
}


getMedi() {
  return this.afd.list('medi-list');
}




updateMedication(medi: Medi) {
  return this.mediListRef.update(medi.key, medi);
}

removeMedication(medi: Medi) {
  return this.mediListRef.remove(medi.key);
}

  getActiveLevel(): AngularFireList<any[]>{
    return this.afd.list('/activlevel/')
}

  addActivlevel(activLevel){
    this.afd.list('/activlevel/').push(activLevel);
    
   
   
   // this.savedAlert();
  }

  removeActivLevel(id){
    this.afd.list('/activlevel/').remove(id);
  }

  removeMedi(id){
    this.afd.list('/medis/').remove(id);
  }
}
