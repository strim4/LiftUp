import { Component, NgZone } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Pedometer } from '@ionic-native/pedometer';
import { Observable } from 'rxjs/Observable';
import { Platform, ToastController } from 'ionic-angular';

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
  
 
  start: boolean;
	PedometerData:any;
	stepCount : any = 0;
 
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public platformCtrl: Platform, private ngZoneCtrl: NgZone,public pedometer: Pedometer, public backgroundMode: BackgroundMode, public navParams: NavParams, private BluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
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

  startBgMode(){
    this.backgroundMode.enable();
    this.presentActiveAlert();
  }
  stopBgMode(){
    this.backgroundMode.disable();
    this.presentDeactiveAlert();
  }
  fnGetPedoUpdate(){
   
  	if (this.platformCtrl.is('cordova')) {
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
	   this.fnTost('Please Walk🚶‍to Get Pedometer Update.');
	}else{
		this.fnTost('This application needs to be run on📱device');
	}

    
  }

  fnStopPedoUpdate(){
  	this.pedometer.stopPedometerUpdates();
	  this.start = false;
  }

  fnTost(message) {
      let toast = this.toastCtrl.create({
        message: message,
        position: 'bottom',
        duration: 3000
      });
      toast.present();
  }

}











