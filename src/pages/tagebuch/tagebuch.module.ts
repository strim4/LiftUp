import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagebuchPage } from './tagebuch';

@NgModule({
  declarations: [
    TagebuchPage,
  ],
  imports: [
    IonicPageModule.forChild(TagebuchPage),
  ],
})
export class TagebuchPageModule {}
