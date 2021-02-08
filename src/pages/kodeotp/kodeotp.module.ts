import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KodeotpPage } from './kodeotp';

@NgModule({
  declarations: [
    KodeotpPage,
  ],
  imports: [
    IonicPageModule.forChild(KodeotpPage),
  ],
})
export class KodeotpPageModule {}
