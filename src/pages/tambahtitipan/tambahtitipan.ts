import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}

@IonicPage()
@Component({
  selector: 'page-tambahtitipan',
  templateUrl: 'tambahtitipan.html',
})
export class TambahtitipanPage {
  kota: Port[];
  asal: Port;
  tujuan: Port;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.kota = [
      { id: 1, name: 'Jakarta' },
      { id: 2, name: 'Surabaya' },
      { id: 3, name: 'Makassar' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahtitipanPage');
  }

  //ion-selectable
  kotaasal(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  //ion-selectable
  kotatujuan(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

}
