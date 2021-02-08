import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { RestApi } from '../../provider/RestApi';


@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class DaftarPage {

product : any = {}; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private Rs : RestApi, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPage');
  }

  // register and go to home page
  register() {
    this.product.action = "insert"; 
    let body ={
      produk:this.product
    }
    this.Rs.post("product.php",body).subscribe(data=>{
      console.log(data); 
      this.showToast(data); 
    });
    
    //this.nav.setRoot(HomePage);
    this.navCtrl.push(HomePage);
  }

  // go to login page
  login() {
    //this.nav.setRoot(LoginPage);
    this.navCtrl.push(LoginPage);
  }

   onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  showToast(message){
    let toast = this.toast.create({
    message:message, 
    duration: 2000
    }); 
    toast.present(); 
    }

}
