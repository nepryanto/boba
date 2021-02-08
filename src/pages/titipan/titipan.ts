import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TambahtitipanPage } from '../tambahtitipan/tambahtitipan';


@IonicPage()
@Component({
  selector: 'page-titipan',
  templateUrl: 'titipan.html',
})
export class TitipanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitipanPage');
  }

  tambah(){
    this.navCtrl.push(TambahtitipanPage);
  }

  notif(){
    let pesannya = this.alertCtrl.create({
      title:'Info',
      message:'Yakin?',
      buttons:[
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Batal Di Kik');
          }
        },
        {
          text: 'Setuju',
          handler: () => {
            console.log('Setuju Di Kik');
          }
        }
      ]
    });
    pesannya.present();
  }

}
