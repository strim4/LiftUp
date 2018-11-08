import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnergiePage } from './energie';

@NgModule({
  declarations: [
    EnergiePage,
  ],
  imports: [
    IonicPageModule.forChild(EnergiePage),
  ],
})
export class EnergiePageModule {}
