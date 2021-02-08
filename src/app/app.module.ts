import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BerandaPage } from '../pages/beranda/beranda';
import { KirimanPage } from '../pages/kiriman/kiriman';
import { TitipanPage } from '../pages/titipan/titipan';
import { ProfilPage } from '../pages/profil/profil';
import { TambahkirimanPage } from '../pages/tambahkiriman/tambahkiriman';
import { EditkirimanPage } from '../pages/editkiriman/editkiriman';
import { TambahtitipanPage } from '../pages/tambahtitipan/tambahtitipan';
import { KodeotpPage } from '../pages/kodeotp/kodeotp';
import { WelcomePage } from '../pages/welcome/welcome';
import { LupapasswordPage } from '../pages/lupapassword/lupapassword';
import { LoginPage } from '../pages/login/login';
import { DaftarPage } from '../pages/daftar/daftar';
import { HttpClientModule } from '@angular/common/http';
import { RestApi } from '../provider/RestApi';
import { IonicSelectableModule } from 'ionic-selectable';
import { Geolocation } from '@ionic-native/geolocation';
import { DestinationDetailPage } from '../pages/destination-detail/destination-detail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BerandaPage,
    KirimanPage,
    TitipanPage,
    ProfilPage,
    TambahkirimanPage,
    EditkirimanPage,
    TambahtitipanPage,
    EditkirimanPage,
    KodeotpPage,
    WelcomePage,
    LupapasswordPage,
    LoginPage,
    DaftarPage,
    DestinationDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicSelectableModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BerandaPage,
    KirimanPage,
    TitipanPage,
    ProfilPage,
    TambahkirimanPage,
    EditkirimanPage,
    TambahtitipanPage,
    EditkirimanPage,
    KodeotpPage,
    WelcomePage,
    LupapasswordPage,
    LoginPage,
    DaftarPage,
    DestinationDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestApi,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
