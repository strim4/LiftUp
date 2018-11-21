import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TischPage } from './tisch';

@NgModule({
  declarations: [
    TischPage,
  ],
  imports: [
    IonicPageModule.forChild(TischPage),
  ],
})
export class TischPageModule {}
