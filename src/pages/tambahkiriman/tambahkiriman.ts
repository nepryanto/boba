import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, PopoverController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IonicSelectableComponent } from 'ionic-selectable';
import { DestinationDetailPage } from '../destination-detail/destination-detail';
declare var google: any;

class Port {
  public id: number;
  public name: string;
}


@IonicPage()
@Component({
  selector: 'page-tambahkiriman',
  templateUrl: 'tambahkiriman.html',
})
export class TambahkirimanPage {
  kota: Port[];
  asal: Port;
  tujuan: Port;
  
GoogleAutocomplete: any;
autocompleteFrom: any;
autocompleteItemsFrom: any[];

autocompleteTo: any;
autocompleteItemsTo: any[];

From_search_results: any
To_search_results: any;

@ViewChild('map') mapElement: ElementRef;
@ViewChild('directionsPanel') directionsPanel: ElementRef;
map: any;
latitud: any;
logitude: any;

fromlat: number;
fromlang: number;
tolat: number;
tolang: number;

fromjson = {};
tojson = {};

showDirection: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public zone: NgZone,
    private Geolocation: Geolocation,
    public toastCtrl: ToastController,
    public http: HttpClient,
    public platform: Platform,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
    ) {
    this.kota = [
      { id: 1, name: 'Jakarta' },
      { id: 2, name: 'Surabaya' },
      { id: 3, name: 'Makassar' }
    ];

    this.autocompleteFrom = {}
    this.autocompleteItemsFrom = [];
    this.autocompleteTo = {}
    this.autocompleteItemsTo = [];

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.showDirection = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahkirimanPage');
    this.getLocation()
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

  //untuk map
  getLocation() {
    this.Geolocation.getCurrentPosition().then((res) => {
      let location = 'lat ' + res.coords.latitude + ' lang ' + res.coords.longitude;
      console.log(location)
      this.fromlat = res.coords.latitude
      this.fromlang = res.coords.longitude
      // this.loadMap()      
      this.selectSearchResultFrom('1')
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap() {
    console.log(this.fromlat)
    console.log(this.fromlang)
    let latLng = new google.maps.LatLng(this.fromlat, this.fromlang);
    console.log(latLng)
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarkersToMap()
  }

  addMarkersToMap() {
    var position = new google.maps.LatLng(this.fromlat, this.fromlang);
    var dogwalkMarker = new google.maps.Marker({
      map: this.map,
      position: position,
      icon: {
        url: "assets/logo.png",
        scaledSize: new google.maps.Size(22, 22)
      }
    });
    dogwalkMarker.setMap(this.map);
  }

  updateSearchResultsFrom() {
    this.From_search_results = false
    if (this.autocompleteFrom.input == '') {
      this.autocompleteItemsFrom = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteFrom.input },
      (predictions, status) => {
        this.autocompleteItemsFrom = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItemsFrom.push(prediction);
          });
        });
      });
  }

  selectSearchResultFrom(newaddress: any) {
    const address = newaddress.description
    this.autocompleteFrom.input = address
    console.log(address)
    this.From_search_results = true
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      console.log(results)
      //  this.fromlat = results[0].geometry.location.lat();
      //  this.fromlang = results[0].geometry.location.lng();
      this.fromjson = { 'lat': this.fromlat, 'lng': this.fromlang };
      console.log(this.fromlat)
      console.log(this.fromlang)
      if (this.fromlat, this.fromlang) {
        this.selectSearchResultTo('1')
      }
    });
  }

  updateSearchResultsTo() {
    this.To_search_results = false
    if (this.autocompleteTo.input == '') {
      this.autocompleteItemsTo = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteTo.input },
      (predictions, status) => {
        this.autocompleteItemsTo = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItemsTo.push(prediction);
          });
        });
      });
  }

  selectSearchResultTo(newaddress: any) {
    const address = newaddress.description
    this.autocompleteTo.input = address
    console.log(address)
    this.To_search_results = true
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      console.log(results)
      this.tolat = 22.303894;
      this.tolang = 70.802162;
      this.tojson = { 'lat': this.tolat, 'lng': this.tolang };
      console.log(this.tolat)
      console.log(this.tolang)
      if (this.tolat, this.tolang) {
        this.loadMapp()
      }
    });
  }

  loadMapp() {
    let latLng = new google.maps.LatLng(this.tolat, this.tolang);
    console.log(latLng)
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //this.addMarker();
  }
  showDir() {
    this.showDirection = true;
  }

  // addMarker() {
  //   var formposition = new google.maps.LatLng(this.fromjson);
  //   var toposition = new google.maps.LatLng(this.tojson);
  //   var dogwalkMarker = new google.maps.Marker({
  //     map: this.map,
  //     position: formposition,
  //     icon: {
  //       url: "assets/imgs/location-logo.png",
  //       scaledSize: new google.maps.Size(22, 22)
  //     }
  //   });
    // var dogwalkMarker = new google.maps.Marker({
    //   map: this.map,
    //   position: toposition,
    //   icon: {
    //     url: "assets/imgs/location-logo.png",
    //     scaledSize: new google.maps.Size(22, 22)
    //   }
    // });
    // dogwalkMarker.setMap(this.map);
    //this.startNavigating();
  //}

  startNavigating() {
    console.log(this.fromjson);
    console.log(this.tojson);

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.map,
      polylineOptions: {
        strokeColor: "black"
      },
      suppressMarkers: true
    });

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
      origin: this.fromjson,
      destination: this.tojson,
      travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {
      console.log(res)

      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res)
        this.destinationPopover()
      } else {
        console.warn(status);
      }
    });
  }

  destinationPopover() {
    console.log(this.fromjson);
    console.log(this.tojson);

    let popover = this.popoverCtrl.create(DestinationDetailPage, { 'From_Pin': this.fromjson, 'TO_Pin': this.tojson });
    popover.onDidDismiss(data => {
      if (data && data.popover == 'dismiss') {
       // this.navCtrl.push(PickupPage)
      } else if (data && data.popover == 'Request') {
        //this.navCtrl.push(RequestPage)
      } else {
      }
    });
    popover.present();
  }

  backTo() {
    this.navCtrl.pop()
  }

}

//https://www.npmjs.com/package/ionic-selectable
//https://stackblitz.com/edit/ionic-selectable-icon-template?file=app%2Fpages%2Fhome%2Fhome.ts
