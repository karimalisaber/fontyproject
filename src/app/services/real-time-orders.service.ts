import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
// import * as Pusher from 'pusher-js';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RealTimeOrdersService {
  
  environment = {
    pusher: {
      key: 'f0c875ab3b9bcdb81b06',
      cluster: 'eu',
      // useTLS: true
    }
  }

  channel: any;
  pusher: any;
  
  constructor() {
    this.pusher = new Pusher(this.environment.pusher.key, {
      cluster: this.environment.pusher.cluster,
      // secret : "f2722683e602c4a9c340"
       
  
      // encrypted: true
      // forceTLS: true
      });
  
      // this.pusher.app_Id = ""
      // Pusher.logToConsole = true;
  
      this.channel = this.pusher.subscribe('order');   
  }

}