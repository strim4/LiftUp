import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private BluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
 BluetoothSerial.enable() }
 devices = [];
btnFindDevices() {
   this.BluetoothSerial.isEnabled().then(() => {
   this.BluetoothSerial.discoverUnpaired().then((allDevices) => {
   this.devices = allDevices;
   console.log(allDevices);
});
});
}

btnBlueToothConnect() {
   if (this.devices.length > 0) {
   //this code connects device which’s position is 0. Change it whatever you 
   //want.
   this.BluetoothSerial.connect(this.devices[0].id).subscribe((data) => {
   console.log('connected', data);
   }, (error) => {
   console.log('not connected', error);
   });
    }
    else {
    console.log('Device List did not genereted yet.');
    }
    }

   

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorverbindenPage');
    
  }

  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.BluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
      })

    this.BluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      })
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(address: any) {

    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.BluetoothSerial.connectInsecure(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.BluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }
}











