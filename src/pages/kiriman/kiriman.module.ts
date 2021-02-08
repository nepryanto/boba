import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KirimanPage } from './kiriman';

@NgModule({
  declarations: [
    KirimanPage,
  ],
  imports: [
    IonicPageModule.forChild(KirimanPage),
  ],
})
export class KirimanPageModule {}
