import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
})
export class TagesbeschaftigungPage {

 
  activities: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.activities = [
     {title: 'Laufen'},
     {title: 'Schwimmen'},
     {title: 'Klettern'},
     {title: 'Tanzen'},
     {title: 'Yoga'},
     {title: 'Pilates'},
  ];
    
  }

  

    
  addAct(){
 
    let prompt = this.alertCtrl.create({
        title: 'Aktivität hinzufügen',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.activities.push(data);
                }
            }
        ]
    });

    prompt.present();
}


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagesbeschaftigungPage');
  }


}