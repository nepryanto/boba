import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TambahkirimanPage } from '../tambahkiriman/tambahkiriman';

/**
 * Generated class for the KirimanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kiriman',
  templateUrl: 'kiriman.html',
})
export class KirimanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KirimanPage');
  }

  tambah(){
    this.navCtrl.push(TambahkirimanPage);
  }

}
