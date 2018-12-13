import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { Energy } from '../../model/energy/energy.model';
import { Actlev } from '../../model/actlev/actlev.model';
import { Observable } from 'rxjs/Observable';
import { ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

import { FirebaseProvider } from './../../providers/firebase/firebase';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';


/**
 * Generated class for the AnalysePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analyse',
  templateUrl: 'analyse.html',
  
})
export class AnalysePage {
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineactCanvas') lineactCanvas;
  lineChart: any;
  lineactChart: any;

  energyList: Observable<Energy[]>;
  energies: Energy[] = [];
  enval: any[] = [];
  endate: any[] = [];

  actList: Observable<Actlev[]>;
  activities: Actlev[] = [];
  acval: any[] = [];
  acdate: any[] = [];

  date: any[] = [];



  

  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase) {

   
   
    this.energyList = afd.list<Energy>('energy-list').valueChanges();
    this.energyList.subscribe(energies => this.energies = energies);

    this.actList = afd.list<Actlev>('actlev-list').valueChanges();
    this.actList.subscribe(activities => this.activities = activities);
 

   
  }

  show(){
    this.acdate = [];
    this.endate = [];
    
  // Aus dem Elementen des Energy Observable ein Array erstellen
    this.energyList.subscribe(energies => this.energies = energies);
    this.energies.sort((a, b) => a.date <= b.date ? -1 : 1);
    console.log(this.energies);

    //Die Childvalues "energielevel" in einen neuen Array speichern
    for(let i=0;i<this.energies.length ;i++){  
     // this.enval.push(this.energies[i].enlev)
      this.enval.push(this.energies[i].enlev)
      console.log(this.enval);
    }
    

     


      //Die Childvalues Energy "Datum" in einen neuen Array speichern
    for(let i=0;i<this.energies.length ;i++){  
      // this.enval.push(this.energies[i].enlev)
       this.endate.push(this.energies[i].date) }
      

         // Aus dem Elementen des Energy Observable ein Array erstellen und nach Datum sortieren
    this.actList.subscribe(activities => this.activities = activities);
    this.activities.sort((a, b) => a.date <= b.date ? -1 : 1);
   

    //Die Childvalues "energielevel" in einen neuen Array speichern
    for(let i=0;i<this.activities.length ;i++){  
     // this.enval.push(this.energies[i].enlev)
      this.acval.push(this.activities[i].actlev)
     
    }

      //Die Childvalues Energy "Datum" in einen neuen Array speichern
    for(let i=0;i<this.activities.length ;i++){  
      // this.enval.push(this.energies[i].enlev)
       this.acdate.push(this.activities[i].date)
       console.log(this.acdate);}


    

       
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: this.endate,
          datasets: [
              {
                  label: "Energielevel",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.enval,
                  spanGaps: false,
              },
              
          ]
      }

  });

         
  this.lineactChart = new Chart(this.lineactCanvas.nativeElement, {
 
    type: 'line',
    data: {
        labels: this.acdate,
        datasets: [
            {
                label: "Aktivitätslevel",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(255,51,204,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255,51,204,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255,51,204,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.acval,
                spanGaps: false,
            },
            
        ]
    }

});

   }
    
    

  

  ionViewDidLoad() {

    
  }

}
