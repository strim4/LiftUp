import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchmerzeintraegePage } from './schmerzeintraege';

@NgModule({
  declarations: [
    SchmerzeintraegePage,
  ],
  imports: [
    IonicPageModule.forChild(SchmerzeintraegePage),
  ],
})
export class SchmerzeintraegePageModule {}
