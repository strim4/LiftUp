import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Firebase } from '@ionic-native/firebase';

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

import { EnergiePage } from '../pages/energie/energie';
import { TagesbeschaftigungPage } from '../pages/tagesbeschaftigung/tagesbeschaftigung';
import { AktivitaetslevelPage } from '../pages/aktivitaetslevel/aktivitaetslevel';
import { MedikamentePage } from '../pages/medikamente/medikamente';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeactivePage,
    TagebuchPage,
    SchmerzenmeldenPage,
    SensorverbindenPage,
    AboutePage,
    AnalysePage,
    ArztbriefexportPage,
    ProfilePage,
    ErinnerungPage,

    UebungenPage,
    ErgonomiePage,
    WarumBewegungPage,
    WasTunSchmerzPage,
    UebArbeitsplatzPage,
    LockerungsUebPage,
    UebObRueckenPage,
    UebMitRueckenPage,
    UebUntRueckenPage,
    UebGanzRueckenPage,

    EnergiePage,
    TagesbeschaftigungPage,
    AktivitaetslevelPage,
    MedikamentePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeactivePage,
    TagebuchPage,
    SchmerzenmeldenPage,
    SensorverbindenPage,
    AboutePage,
    AnalysePage,
    ArztbriefexportPage,
    ProfilePage,
    ErinnerungPage,

    UebungenPage,
    ErgonomiePage,
    WarumBewegungPage,
    WasTunSchmerzPage,
    UebArbeitsplatzPage,
    LockerungsUebPage,
    UebObRueckenPage,
    UebMitRueckenPage,
    UebUntRueckenPage,
    UebGanzRueckenPage,

    TagesbeschaftigungPage,
    AktivitaetslevelPage,
    MedikamentePage,
    EnergiePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
