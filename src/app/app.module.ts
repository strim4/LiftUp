
// Alle verwendeten Module, die von der App verwendet werden, werden hier importiert
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { HttpClientModule } from '@angular/common/http'; 
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { FusionCharts } from 'fusioncharts';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Pedometer } from '@ionic-native/pedometer';
import { AngularFireAuth } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BeactivePage } from '../pages/beactive/beactive';
import { TagebuchPage } from '../pages/tagebuch/tagebuch';
import { SchmerzenmeldenPage } from '../pages/schmerzenmelden/schmerzenmelden';
import { SensorverbindenPage } from '../pages/sensorverbinden/sensorverbinden';
import { AboutePage } from '../pages/aboute/aboute';
import { AnalysePage } from '../pages/analyse/analyse';
import { ArztbriefexportPage } from '../pages/arztbriefexport/arztbriefexport';
import { ProfilePage } from '../pages/profile/profile';
import { ErinnerungPage } from '../pages/erinnerung/erinnerung';
import { AddactPage } from '../pages/addact/addact';

import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './credentials';

import { LocalNotifications } from '@ionic-native/local-notifications';

import { DatePicker } from '@ionic-native/date-picker';

import { UebungenPage } from '../pages/uebungen/uebungen';
import { UebArbeitsplatzPage } from '../pages/ueb-arbeitsplatz/ueb-arbeitsplatz';
import { LockerungsUebPage } from '../pages/lockerungs-ueb/lockerungs-ueb';
import { UebObRueckenPage } from '../pages/ueb-ob-ruecken/ueb-ob-ruecken';
import { UebMitRueckenPage } from '../pages/ueb-mit-ruecken/ueb-mit-ruecken';
import { UebUntRueckenPage } from '../pages/ueb-unt-ruecken/ueb-unt-ruecken';
import { UebGanzRueckenPage } from '../pages/ueb-ganz-ruecken/ueb-ganz-ruecken';

import { ErgonomiePage } from '../pages/ergonomie/ergonomie';
import { StuhlPage } from '../pages/stuhl/stuhl';
import { TischPage } from '../pages/tisch/tisch';
import { BildschirmPage } from '../pages/bildschirm/bildschirm';
import { NotebookPage } from '../pages/notebook/notebook';

import { WarumBewegungPage } from '../pages/warum-bewegung/warum-bewegung';
import { WasTunSchmerzPage } from '../pages/was-tun-schmerz/was-tun-schmerz';
import { SchmerzMediPage } from '../pages/schmerz-medi/schmerz-medi';

import { EnergiePage } from '../pages/energie/energie';
import { TagesbeschaftigungPage } from '../pages/tagesbeschaftigung/tagesbeschaftigung';
import { AktivitaetslevelPage } from '../pages/aktivitaetslevel/aktivitaetslevel';
import { MedikamentePage } from '../pages/medikamente/medikamente';
import { TagebucheintraegePage } from '../pages/tagebucheintraege/tagebucheintraege';

import { SchmerzStaerkePage } from '../pages/schmerz-staerke/schmerz-staerke';
import { SchmerzLokalisationPage } from '../pages/schmerz-lokalisation/schmerz-lokalisation';
import { NotizenPage } from '../pages/notizen/notizen';
import { SchmerzeintraegePage } from '../pages/schmerzeintraege/schmerzeintraege';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { MediProvider } from '../providers/medi/medi';
import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeactivePage,
    TagebuchPage,
    SchmerzenmeldenPage,
    SchmerzeintraegePage,
    SensorverbindenPage,
    AboutePage,
    AnalysePage,
    ArztbriefexportPage,
    ProfilePage,
    ErinnerungPage,
    TagebucheintraegePage,
    UebungenPage,
    UebArbeitsplatzPage,
    LockerungsUebPage,
    UebObRueckenPage,
    UebMitRueckenPage,
    UebUntRueckenPage,
    UebGanzRueckenPage,
  

    ErgonomiePage,
    StuhlPage,
    TischPage,
    BildschirmPage,
    NotebookPage,

    WarumBewegungPage,
    WasTunSchmerzPage,
    SchmerzMediPage,

    TagebucheintraegePage,
    EnergiePage,
    TagesbeschaftigungPage,
    AktivitaetslevelPage,
    MedikamentePage,

    AddactPage,


    SchmerzStaerkePage,
    SchmerzLokalisationPage,
    NotizenPage


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    ChartModule ,
  
    
   
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,  
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeactivePage,
    TagebuchPage,
    SchmerzenmeldenPage,
    SchmerzeintraegePage,
    SensorverbindenPage,
    AboutePage,
    AnalysePage,
    ArztbriefexportPage,
    ProfilePage,
    ErinnerungPage,
    TagebucheintraegePage,
    UebungenPage,

    UebArbeitsplatzPage,
    LockerungsUebPage,
    UebObRueckenPage,
    UebMitRueckenPage,
    UebUntRueckenPage,
    UebGanzRueckenPage,

    AddactPage,


    ErgonomiePage,
    StuhlPage,
    TischPage,
    BildschirmPage,
    NotebookPage,

    WarumBewegungPage,
    WasTunSchmerzPage,
    SchmerzMediPage,


    TagesbeschaftigungPage,
    AktivitaetslevelPage,
    MedikamentePage,
    EnergiePage,

    SchmerzStaerkePage,
    SchmerzLokalisationPage,
    NotizenPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    LocalNotifications,
    DatePicker,
    
    MediProvider,
    FirebaseProvider,
    BackgroundMode,
    Pedometer
  ]
})
export class AppModule {}
