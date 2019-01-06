import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import {FirebaseListObservable} from 'angularfire2/database-deprecated'


import { Note } from '../../model/note/note.model';
import { Pain } from '../../model/pain/pain.model';

import { map } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SchmerzeintraegePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schmerzeintraege',
  templateUrl: 'schmerzeintraege.html',
  providers: [FirebaseProvider]
})
export class SchmerzeintraegePage {
    //Klassenvariabeln
tdate: any;
title: any;
shouldHide: boolean;
shouldHideAll: boolean;

userId: string;

//Container für die DB-Listen
painList: Observable<Pain[]>;
noteList: Observable<Note[]>;

public allPainList: Observable<any> ;
public allNoteList: Observable<any> ;

public filteredPainList: Observable<any> ;
public filteredNoteList: Observable<any> ;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public afd: AngularFireDatabase,private firebaseProvider: FirebaseProvider, public navParams: NavParams) {
    this.afAuth.authState.subscribe(auth =>{
      this.userId = auth.uid;
     
      //Listen aus FIrebase abrufen
this.painList = afd.list<Pain>(`/pain-list/${this.userId}`).valueChanges();
this.noteList = afd.list<Note>(`/note-list/${this.userId}`).valueChanges();



       
     });
  }

  //Filter für das Datum der Schmerzeinträge
 showFilterDate(date: Date){
  this.shouldHide = false;
  this.shouldHideAll = true;
  
    this.filteredPainList = this.painList
    .map(receita => {        
      return receita.filter(r => {          
        return (r.date) == this.tdate;
      })
    }, error => console.log(error));
    this.filteredNoteList = this.noteList
    .map(receita => {        
      return receita.filter(r => {          
        return (r.date) == this.tdate;
      })
    }, error => console.log(error));
    
    this.shouldHide = false;
  
   }

   showAll(){
    this.shouldHideAll = false;
    this.shouldHide = true;
      this.allPainList = this.painList;
      this.allNoteList = this.noteList;
  
    
    
     }

  ionViewDidLoad() {
    this.shouldHide = true;
    this.shouldHideAll = true;
    console.log('ionViewDidLoad SchmerzeintraegePage');
  }

}
