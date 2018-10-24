import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutePage } from './aboute';

@NgModule({
  declarations: [
    AboutePage,
  ],
  imports: [
    IonicPageModule.forChild(AboutePage),
  ],
})
export class AboutePageModule {}
