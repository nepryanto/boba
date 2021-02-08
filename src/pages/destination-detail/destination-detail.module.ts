import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestinationDetailPage } from './destination-detail';

@NgModule({
  declarations: [
    DestinationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DestinationDetailPage),
  ],
})
export class DestinationDetailPageModule {}
