import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  * as firebase from 'firebase';



import { HomePage } from '../pages/home/home';
import { AboutePage } from '../pages/aboute/aboute';
import { AnalysePage } from '../pages/analyse/analyse';
import { ArztbriefexportPage } from '../pages/arztbriefexport/arztbriefexport';
import { ProfilePage } from '../pages/profile/profile';
import { ErinnerungPage } from '../pages/erinnerung/erinnerung'
import { firebaseConfig } from './credentials';
import { EnergiePage } from '../pages/energie/energie';
import { MedikamentePage } from '../pages/medikamente/medikamente';
import { AktivitaetslevelPage } from '../pages/aktivitaetslevel/aktivitaetslevel';
import { TagesbeschaftigungPage } from '../pages/tagesbeschaftigung/tagesbeschaftigung';

import { UebungenPage } from '../pages/uebungen/uebungen';
import { ErgonomiePage } from '../pages/ergonomie/ergonomie';
import { WarumBewegungPage } from '../pages/warum-bewegung/warum-bewegung';
import { WasTunSchmerzPage } from '../pages/was-tun-schmerz/was-tun-schmerz';
import { UebArbeitsplatzPage } from '../pages/ueb-arbeitsplatz/ueb-arbeitsplatz';
import { LockerungsUebPage } from '../pages/lockerungs-ueb/lockerungs-ueb';
import { UebObRueckenPage } from '../pages/ueb-ob-ruecken/ueb-ob-ruecken';
import { UebMitRueckenPage } from '../pages/ueb-mit-ruecken/ueb-mit-ruecken';
import { UebUntRueckenPage } from '../pages/ueb-unt-ruecken/ueb-unt-ruecken';
import { UebGanzRueckenPage } from '../pages/ueb-ganz-ruecken/ueb-ganz-ruecken';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  
  

  //rootPage: any = HomePage;
  rootPage: any;
  

  pages: Array<{title: string, component: any, icon: string}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    
   firebase.initializeApp(firebaseConfig);
   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    if (!user) {
    this.rootPage = 'LoginPage';
    unsubscribe();
    } else {
    this.rootPage = HomePage;
    unsubscribe();
    }
    });
   

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Profile', component: ProfilePage, icon: 'person' },
      { title: 'Analyse', component: AnalysePage, icon: 'pulse' },
      { title: 'Arztbrief Export', component: ArztbriefexportPage, icon: 'open'},
      { title: 'Erinnerung ', component: ErinnerungPage, icon: 'alarm' },
      { title: 'Über LiftUp', component: AboutePage, icon: 'information-circle' }

    ];

   

  };

  

  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
  
}
