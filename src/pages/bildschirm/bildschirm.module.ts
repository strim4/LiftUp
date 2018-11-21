import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BildschirmPage } from './bildschirm';

@NgModule({
  declarations: [
    BildschirmPage,
  ],
  imports: [
    IonicPageModule.forChild(BildschirmPage),
  ],
})
export class BildschirmPageModule {}
