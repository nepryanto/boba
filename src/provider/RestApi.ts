import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class RestApi {
   server: string = 'https://localhost/armada/api/';

  constructor(
    public http : HttpClient
    ) 
  {
    
  }

  post(body, file) 
  {
    
      let type = "application/json; charset=UTF-8";
      let headers = new HttpHeaders({ 'Content-Type': type});
      let options = { headers: headers };

      return this.http.post(this.server + file, JSON.stringify(body), options)
      .timeout(5900)
      .map(res => res);
  }
}
//header("Access-Control-Allow-Origin: *"); 
//$post = file_get_contents('php://input',true);
//product : any = {}; 
//<ion-input type="text" [(ngModel)]="product.title"></ion-input>