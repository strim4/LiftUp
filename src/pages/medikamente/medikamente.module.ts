import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedikamentePage } from './medikamente';

@NgModule({
  declarations: [
    MedikamentePage,
  ],
  imports: [
    IonicPageModule.forChild(MedikamentePage),
  ],
})
export class MedikamentePageModule {}
