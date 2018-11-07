import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { BeactivePage } from '../beactive/beactive';
import { TagebuchPage } from '../tagebuch/tagebuch';
import { AuthProvider } from '../../providers/auth/auth';

import { SchmerzenmeldenPage } from '../schmerzenmelden/schmerzenmelden';
import { SensorverbindenPage } from '../sensorverbinden/sensorverbinden';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  beactivePage = BeactivePage;
  tagebuchPage = TagebuchPage;
  sensorverbindenPage = SensorverbindenPage;
  schmerzenmeldenPage = SchmerzenmeldenPage;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {

  }

}
