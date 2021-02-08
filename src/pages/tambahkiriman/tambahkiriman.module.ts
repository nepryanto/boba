import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahkirimanPage } from './tambahkiriman';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  declarations: [
    TambahkirimanPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahkirimanPage),
    IonicSelectableModule
  ],
})
export class TambahkirimanPageModule {}
