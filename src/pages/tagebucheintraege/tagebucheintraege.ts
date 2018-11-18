import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import { Medi } from '../../model/medi/medi.model';
import { map } from 'rxjs/operators';


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
  

  constructor(public navCtrl: NavController,private firebaseProvider: FirebaseProvider, public navParams: NavParams) {
/*this.mediList = this.firebaseProvider.getMedicationList()  
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });*/

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagebucheintraegePage');
  }

}

