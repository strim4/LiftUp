import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErgonomiePage } from './ergonomie';

@NgModule({
  declarations: [
    ErgonomiePage,
  ],
  imports: [
    IonicPageModule.forChild(ErgonomiePage),
  ],
})
export class ErgonomiePageModule {}
