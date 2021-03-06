import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { Energy } from '../../model/energy/energy.model';
import { Actlev } from '../../model/actlev/actlev.model';
import { Pain } from '../../model/pain/pain.model';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ViewChild } from '@angular/core';

import { Chart } from 'chart.js';
import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseProvider } from './../../providers/firebase/firebase';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Steps } from '../../model/steps/steps.model';


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
  shouldHide: boolean;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineactCanvas') lineactCanvas;
  @ViewChild('linepainCanvas') linepainCanvas;
  @ViewChild('barstepCanvas') baractCanvas;
  lineChart: any;
  lineactChart: any;
  linepainChart: any;
  barstepsChart: any;

  energyList: Observable<Energy[]>;
  energies: Energy[] = [];
  enval: any[] = [];
  endate: any[] = [];

  actList: Observable<Actlev[]>;
  activities: Actlev[] = [];
  acval: any[] = [];
  acdate: any[] = [];

  painList: Observable<Pain[]>;
  pains: Pain[] = [];
  pval: any[] = [];
  pdate: any[] = [];

  stepList: Observable<Steps[]>;
  steps: Steps[] = [];
  sval: any[] = [];
  sdate: any[] = [];

 

  date: any[] = [];



  

  userId: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public afd: AngularFireDatabase, public alertCtrl: AlertController) {

    this.afAuth.authState.subscribe(auth =>{
      this.userId = auth.uid;
     
     

     this.energyList = afd.list<Energy>(`/energy-list/${this.userId}`).valueChanges();
     this.energyList.subscribe(energies => this.energies = energies);
 
     this.actList = afd.list<Actlev>(`/actlev-list/${this.userId}`).valueChanges();
     this.actList.subscribe(activities => this.activities = activities);

     this.painList = afd.list<Pain>(`/pain-list/${this.userId}`).valueChanges();
     this.painList.subscribe(pains => this.pains = pains);

     this.painList = afd.list<Pain>(`/pain-list/${this.userId}`).valueChanges();
     this.painList.subscribe(pains => this.pains = pains);
       
   this.stepList = afd.list<Steps>(`/steps-list/${this.userId}`).valueChanges();
     this.stepList.subscribe(steps => this.steps = steps);
     });
   

 

   
  }

    btnClickedInfo(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'Damit die Verlaufsdiagramme angezeigt werden, müssen entsprechende Einträge im Tagebuch und in der Schmerzdokumentation erfasst werden.',
      buttons: ['OK']
    });
    alert.present();
  }
  
  show(){
    this.shouldHide = false;
    this.acdate = [];
    this.endate = [];
    this.pdate = [];
    this.sdate = [];
    
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
      

         // Aus dem Elementen des Activitätslevel Observable ein Array erstellen und nach Datum sortieren
    this.actList.subscribe(activities => this.activities = activities);
    this.activities.sort((a, b) => a.date <= b.date ? -1 : 1);
   

    //Die Childvalues "aktivitätslevel" in einen neuen Array speichern
    for(let i=0;i<this.activities.length ;i++){  
     // this.enval.push(this.energies[i].enlev)
      this.acval.push(this.activities[i].actlev)
     
    }

      //Die Childvalues Aktivitätslevel "Datum" in einen neuen Array speichern
    for(let i=0;i<this.activities.length ;i++){  
      // this.enval.push(this.energies[i].enlev)
       this.acdate.push(this.activities[i].date)
       console.log(this.acdate);}


        // Aus dem Elementen des Schmerzlevels Observable ein Array erstellen und nach Datum sortieren
    this.painList.subscribe(pains => this.pains = pains);
    this.pains.sort((a, b) => a.date <= b.date ? -1 : 1);
   

    //Die Childvalues "Schmerzlevels" in einen neuen Array speichern
    for(let i=0;i<this.pains.length ;i++){  
     // this.enval.push(this.energies[i].enlev)
      this.pval.push(this.pains[i].plev)
     
    }

      //Die Childvalues Schmerzlevels "Datum" in einen neuen Array speichern
    for(let i=0;i<this.pains.length ;i++){  
      // this.enval.push(this.energies[i].enlev)
       this.pdate.push(this.pains[i].date)
       console.log(this.pdate);}

         // Aus dem Elementen des Schritt Observable ein Array erstellen und nach Datum sortieren
    this.stepList.subscribe(steps => this.steps = steps);
    this.steps.sort((a, b) => a.date <= b.date ? -1 : 1);
   

    //Die Childvalues "Schmerzlevels" in einen neuen Array speichern
    for(let i=0;i<this.steps.length ;i++){  
     // this.enval.push(this.energies[i].enlev)
      this.sval.push(this.steps[i].steps)
     
    }

      //Die Childvalues Schmerzlevels "Datum" in einen neuen Array speichern
    for(let i=0;i<this.steps.length ;i++){  
      // this.enval.push(this.energies[i].enlev)
       this.sdate.push(this.steps[i].date)
       console.log(this.sdate);}


 

    

       
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: this.endate,
          datasets: [
              {
                  label: "Energielevel",
                  fill: true,
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
                backgroundColor: "rgba(255,51,204,0.4)",
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

this.linepainChart = new Chart(this.linepainCanvas.nativeElement, {
 
  type: 'line',
  data: {
      labels: this.pdate,
      datasets: [
          {
              label: "Schmerzlevel",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(204,255,0,0.4)",
              borderColor: "rgba(204,255,0,1)",
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
              data: this.pval,
              spanGaps: false,
          },
          
      ]
  }

});


this.barstepsChart = new Chart(this.baractCanvas.nativeElement, {
 
  type: 'bar',
  data: {
      labels: this.sdate,
      datasets: [
          {
              label: "Schritte",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(102,0,204,0.4)",
              borderColor: "rgba(102,0,204,1)",
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
              data: this.sval,
              spanGaps: false,
          },
          
      ]
  }

});



   }

   
    
    

  

  ionViewDidLoad() {
    this.shouldHide = true;

    
  }

}
