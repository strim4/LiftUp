import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Medi } from '../../model/medi/medi.model';
import { Selact } from '../../model/selact/selact.model';

import { Act } from '../../model/act/act.model';
import { Actlev } from '../../model/actlev/actlev.model';
import { Energy } from '../../model/energy/energy.model';
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
  private selactListRef = this.afd.list<Selact>('selact-list');
  private energyListRef = this.afd.list<Energy>('energy-list');
  private actlevListRef = this.afd.list<Actlev>('actlev-list');
  private actpListRef = this.afd.list<Act>('actp-list');
  private ml = this.afd.list('medi-list');

  constructor(public http: HttpClient, public afd: AngularFireDatabase, private alertCtrl: AlertController) {
   
  }



  




addMedication(medi: Medi) {
  return this.mediListRef.push(medi);
 // this.afd.list('/medis-list/').push(medi);
}

addAct(act: Act) {
  return this.actListRef.push(act);
 // this.afd.list('/medis-list/').push(medi);
}

addSelact(selact: Selact) {
  return this.selactListRef.push(selact);
 // this.afd.list('/medis-list/').push(medi);
}

addEnergy(energy: Energy) {
  return this.energyListRef.push(energy);
 // this.afd.list('/medis-list/').push(medi);
}

addActLev(actlev: Actlev) {
  return this.actlevListRef.push(actlev);
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



  removeActivLevel(id){
    this.afd.list('/activlevel/').remove(id);
  }

  removeMedi(id){
    this.afd.list('/medis/').remove(id);
  }
}
