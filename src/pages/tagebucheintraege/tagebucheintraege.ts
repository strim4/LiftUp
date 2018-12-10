import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

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
  //Klassenvariabeln
tdate: any;
title: any;

//Container für die DB-Listen
  mediList: Observable<Medi[]>;
  energyList: Observable<Energy[]>;
  actlevList: Observable<Actlev[]>;
  allmediList: Observable<any>;
  allenergyList: Observable<any>;
  allactlevList: Observable<any>;
  selActList: Observable<any>;

  public filteredMediList: Observable<any> ;
  public filteredTextMediList: Observable<any> ;
  public filteredEnergyList: Observable<any> ;
  filteredActlevelList: Observable<any> ;

  public aMediList: Observable<any> ;
  
  

  
  constructor(public navCtrl: NavController, public afd: AngularFireDatabase,private firebaseProvider: FirebaseProvider, public navParams: NavParams) {
 //Listen aus FIrebase abrufen
this.mediList = afd.list<Medi>('medi-list').valueChanges();

this.energyList = afd.list<Energy>('energy-list').valueChanges();
this.actlevList = afd.list<Actlev>('actlev-list').valueChanges();
this.selActList = afd.list('selact-list').valueChanges();



      


  }

 


//Filter für das Datum der Tagebucheinträge
 showFilterDate(date: Date){
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


 }
//Alle Einträge anzeigen
 showAll(){
  this.allmediList = this.mediList;
  this.allenergyList = this.energyList;
  this.allactlevList = this.actlevList;


 }

 
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TagebucheintraegePage');
  }

}

