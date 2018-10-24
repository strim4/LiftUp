import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalysePage } from './analyse';

@NgModule({
  declarations: [
    AnalysePage,
  ],
  imports: [
    IonicPageModule.forChild(AnalysePage),
  ],
})
export class AnalysePageModule {}
