import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { BeactivePage } from '../beactive/beactive';
import { TagebuchPage } from '../tagebuch/tagebuch';
import { AuthProvider } from '../../providers/auth/auth';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';

import { SchmerzenmeldenPage } from '../schmerzenmelden/schmerzenmelden';
import { SensorverbindenPage } from '../sensorverbinden/sensorverbinden';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  beactivePage = BeactivePage;
  tagebuchPage = TagebuchPage;
  sensorverbindenPage = SensorverbindenPage;
  schmerzenmeldenPage = SchmerzenmeldenPage;

  userId: any;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider, private afAuth: AngularFireAuth) {
 
   

  }

  async logout(): Promise<any>{
   
  
    this.navCtrl.push(LoginPage);
      return this.afAuth.auth.signOut();
      
       
    
     
   
   // return this.afAuth.auth.signOut();
  }

}
