import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

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
  

  getMedi(): AngularFireList<any[]>{
      return this.afd.list('/medis/')
  }

  /*getMedi(): AngularFireList<any[]>{
    return this.afd.list('/medis/')
}*/

  addMedi(mediName, mediDos, mediMeng){
    this.afd.list('/medis/').push(mediName);
    this.afd.list('/medis/').push(mediDos);
    this.afd.list('/medis/').push(mediMeng);
   // this.savedAlert();
  }

  removeMedi(id){
    this.afd.list('/medis/').remove(id);
  }
}
