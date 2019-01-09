import { Component, NgZone } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Pedometer } from '@ionic-native/pedometer';
import { Observable } from 'rxjs/Observable';
import { Platform, ToastController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {  AngularFireList } from "angularfire2/database"; 
import { Steps } from '../../model/steps/steps.model';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';


/**
 * Generated class for the SensorverbindenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensorverbinden',
  templateUrl: 'sensorverbinden.html',
})
export class SensorverbindenPage {
  //Datenmodell für die Schritte
  steps: Steps = {
    steps: '',
 
    date:  new Date()
    
  };
  
  tdate = new Date();
 
  start: boolean;
	PedometerData:any;
	stepCount : any = 0;
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public toastCtrl: ToastController, public platformCtrl: Platform, private ngZoneCtrl: NgZone,public pedometer: Pedometer, public backgroundMode: BackgroundMode, public navParams: NavParams, private BluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    this.stepCount = 0;
    }

   

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorverbindenPage');
    
  }
  //Alarm beim Aktivieren des BGModus
  presentActiveAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hintergrundmodus aktiviert',
      subTitle: 'LiftUp wird nun im Hintergrund ausgeführt. Erforderlich für den Schrittzähler',
      buttons: ['OK']
    });
    alert.present();
  }
   //Alarm beim Aktivieren des BGModus
   presentDeactiveAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hintergrundmodus deaktiviert',
      subTitle: 'LiftUp wird nun nicht mehr im Hintergrund ausgeführt.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Hintergrundmodus aktivieren

  startBgMode(){
    this.backgroundMode.enable();
    this.presentActiveAlert();
  }
  //Hintergrundmodus deaktivieren
  stopBgMode(){
    this.backgroundMode.disable();
    this.presentDeactiveAlert();
  }

  //Schrittzähler starten
  fnGetPedoUpdate(){
   
  
	  	this.pedometer.startPedometerUpdates()
		   .subscribe((PedometerData) => {
		   		this.PedometerData = PedometerData;
		   		this.ngZoneCtrl.run(() => {
			        this.stepCount = this.PedometerData.numberOfSteps;
			   		// this.startDate = new Date(this.PedometerData.startDate);
				   	// this.endDate = new Date(this.PedometerData.endDate);
		      	});
	   });
	   this.start = true;
	   this.fnTost('Damit der Zähler hochgeht 🚶‍ muss du dich bewegen.');


    
  }
//Schrittzähler stoppen
  fnStopPedoUpdate(){
  	this.pedometer.stopPedometerUpdates();
	  this.start = false;
  }
//Medlung beim Starten des Schrittzählers
  fnTost(message) {
      let toast = this.toastCtrl.create({
        message: message,
        position: 'bottom',
        duration: 3000
      });
      toast.present();
  }

  //Alarm beim Speichern
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Speichern',
      subTitle: 'Der Eintrag wurde gespeichert!',
      buttons: ['OK']
    });
    alert.present();
  }
// Schritte speichern

 addSteps(){
   
    this.steps  = {
      steps: this.stepCount,
      date: this.tdate

    }
 
this.firebaseProvider.addSteps(this.steps);
   this.presentAlert();
  }
  
    btnClickedInfo(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'Damit der Schrittzähler weiterläuft, auch wenn du LiftUp geschlossen hast, muss der Hintergrundmodus aktiviert werden.',
      buttons: ['OK']
    });
    alert.present();
  }
}











