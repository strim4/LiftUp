import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotizenPage } from './notizen';

@NgModule({
  declarations: [
    NotizenPage,
  ],
  imports: [
    IonicPageModule.forChild(NotizenPage),
  ],
})
export class NotizenPageModule {}
