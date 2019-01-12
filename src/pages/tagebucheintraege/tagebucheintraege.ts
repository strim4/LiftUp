import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AlertController } from 'ionic-angular';

import {FirebaseListObservable} from 'angularfire2/database-deprecated'


import { Medi } from '../../model/medi/medi.model';
import { Energy } from '../../model/energy/energy.model';
import { Actlev } from '../../model/actlev/actlev.model';
import { map } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
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
  //Klassenvariabeln
tdate: any;
title: any;
shouldHide: boolean;
shouldHideAll: boolean;

//Container für die DB-Listen
  mediList: Observable<Medi[]>;
  energyList: Observable<Energy[]>;
  actlevList: Observable<Actlev[]>;
  selActList: Observable<any>;
  allmediList: Observable<any>;
  allenergyList: Observable<any>;
  allactlevList: Observable<any>;
  allselActList: Observable<any>;


  public filteredMediList: Observable<any> ;
  public filteredTextMediList: Observable<any> ;
  public filteredEnergyList: Observable<any> ;
  filteredActlevelList: Observable<any> ;
  filteredselActList: Observable<any> ;

  public aMediList: Observable<any> ;
  
  userId: string;

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private afAuth: AngularFireAuth, public afd: AngularFireDatabase,private firebaseProvider: FirebaseProvider, public navParams: NavParams) {
    
    
    this.afAuth.authState.subscribe(auth =>{
      this.userId = auth.uid;
     
      //Listen aus FIrebase abrufen
this.mediList = afd.list<Medi>(`/medi-list/${this.userId}`).valueChanges();

//this.energyList = afd.list<Energy>('energy-list').valueChanges();
this.energyList = this.afd.list<Energy>(`/energy-list/${this.userId}`).valueChanges();
this.actlevList = afd.list<Actlev>(`/actlev-list/${this.userId}`).valueChanges();
this.selActList = afd.list(`/selact-list/${this.userId}`).valueChanges();

       
     });
 






  }

 


//Filter für das Datum der Tagebucheinträge
 showFilterDate(date: Date){
this.shouldHide = false;
this.shouldHideAll = true;

  this.filteredTextMediList = this.mediList
  .map(receita => {        
    return receita.filter(r => {          
      return (r.date) == this.tdate;
    })
  }, error => console.log(error));
  this.filteredEnergyList = this.energyList
  .map(receita => {        
    return receita.filter(r => {          
      return (r.date) == this.tdate;
    })
  }, error => console.log(error));
  this.filteredActlevelList = this.actlevList
  .map(receita => {        
    return receita.filter(r => {          
      return (r.date) == this.tdate;
    })
  }, error => console.log(error));
  this.filteredselActList = this.selActList
  .map(receita => {        
    return receita.filter(r => {          
      return (r.date) == this.tdate;
    })
  }, error => console.log(error));
  this.shouldHide = false;

 }
//Alle Einträge anzeigen
 showAll(){
this.shouldHideAll = false;
this.shouldHide = true;
  this.allmediList = this.mediList;
  this.allenergyList = this.energyList;
  this.allactlevList = this.actlevList;
  this.allselActList = this.selActList;


 }

 btnClickedInfo(){
  let alert = this.alertCtrl.create({
    title: 'Information',
    message: 'Damit Tagebucheinträge angezeigt werden, müssen sie vorgängig erfasst werden.',
    buttons: ['OK']
  });
  alert.present();
}

 
  ionViewDidLoad() {
    this.shouldHide = true;
this.shouldHideAll = true;

  
    console.log('ionViewDidLoad TagebucheintraegePage');
  }

}

