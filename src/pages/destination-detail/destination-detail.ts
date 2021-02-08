import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-destination-detail',
  templateUrl: 'destination-detail.html',
})
export class DestinationDetailPage {

  FormLat: any;
  ToLat: any;
  geoAddress: any;
  Home_category: any;
  Params_category: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('Destination-Detail Page')
  }

  choosevehicle() {
    var data = { popover: "dismiss" }
    this.viewCtrl.dismiss(data)
  }

  PayOption(pay) {
    this.Home_category = pay;
  }

}
