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
 
  
  
    date:  Date;
    
 
    addactPage = AddactPage;
    actList: Observable<Act[]>;
    checkedActList: Observable<any>;
    selectedArray :any = [];
   
    


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public afd: AngularFireDatabase, public firebaseProvider: FirebaseProvider) {
   
    this.actList = afd.list<Act>('act-list').valueChanges();
  }

  

  


  selectAct(data){
    
    if (data.checked == true) {
       this.selectedArray.push(this.date, data.title);
       
     } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.testID !== data.testID;
     });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
   }

   presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }

   add(){
   
      this.firebaseProvider.addSelact(this.selectedArray);
      this.presentAlert();
    
     }

   


  ionViewDidLoad() {
    console.log('ionViewDidLoad TagesbeschaftigungPage');
  }


}