import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddactPage } from '../addact/addact';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import { Act } from '../../model/act/act.model';
import { Selact } from '../../model/selact/selact.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { filter } from 'rxjs/operators';

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
 
  selact: Selact = {
    title: '',
    date:  new Date
    
  };

  
    adate:  Date;
    
 
    addactPage = AddactPage;
    actList: Observable<Act[]>;
    checkedActList: Observable<any>;
    selectedArray :any = [];
   
    


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public afd: AngularFireDatabase, public firebaseProvider: FirebaseProvider) {
   //Tagesaktivitäten abrufen
    this.actList = afd.list<Act>('act-list').valueChanges();
  }

  

  

// Die Aktivitäten, welche mit Checkbox gekennzeichnet sind in einen neuen Array speichern
  selectAct(data){
    
    if (data.checked == true) {
     //this.selectedArray.push(this.adate, data.title);
       this.selact.title = data.title;
       this.selact.date = this.adate;
       this.firebaseProvider.addSelact(this.selact)
       
     } else {/*
      let newArray = this.selectedArray.filter(function(el) {
        return el.testID !== data.testID;
     });
      this.selectedArray = newArray;
    */} 
    console.log(this.selact);
   }
//Speicher Hinweis
   presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }
// Array mit den ausgewählten Aktivitäten in Firebase speichern
   add(){
     
     // this.firebaseProvider.addSelact(this.selact)
      //this.firebaseProvider.addSelact(this.selectedArray)
     
      this.presentAlert();
    
     }

   


  ionViewDidLoad() {
    console.log('ionViewDidLoad TagesbeschaftigungPage');
  }


}