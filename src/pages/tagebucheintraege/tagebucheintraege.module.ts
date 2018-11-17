import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagebucheintraegePage } from './tagebucheintraege';

@NgModule({
  declarations: [
    TagebucheintraegePage,
  ],
  imports: [
    IonicPageModule.forChild(TagebucheintraegePage),
  ],
})
export class TagebucheintraegePageModule {}
