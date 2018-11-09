import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeactivePage } from './beactive';

import { UebungenPage } from '../uebungen/uebungen';
import { ErgonomiePage } from '../ergonomie/ergonomie';
import { WarumBewegungPage } from '../warum-bewegung/warum-bewegung';
import { WasTunSchmerzPage } from '../was-tun-schmerz/was-tun-schmerz';
import { UebArbeitsplatzPage } from '../ueb-arbeitsplatz/ueb-arbeitsplatz';
import { LockerungsUebPage } from '../lockerungs-ueb/lockerungs-ueb';
import { UebObRueckenPage } from '../ueb-ob-ruecken/ueb-ob-ruecken';
import { UebMitRueckenPage } from '../ueb-mit-ruecken/ueb-mit-ruecken';
import { UebUntRueckenPage } from '../ueb-unt-ruecken/ueb-unt-ruecken';
import { UebGanzRueckenPage } from '../ueb-ganz-ruecken/ueb-ganz-ruecken';


@NgModule({
  declarations: [
    BeactivePage,
  ],
  imports: [
    IonicPageModule.forChild(BeactivePage),
  ],
})
export class BeactivePageModule {}
