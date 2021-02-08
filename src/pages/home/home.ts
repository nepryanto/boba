import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BerandaPage } from '../beranda/beranda';
import { KirimanPage } from '../kiriman/kiriman';
import { TitipanPage } from '../titipan/titipan';
import { ProfilPage } from '../profil/profil';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  tab1 : any = BerandaPage;
  tab2 : any = KirimanPage;
  tab3 : any = TitipanPage;
  tab4 : any = ProfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
