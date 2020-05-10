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
    
  }

  play(){
    this.pusher = new Pusher(this.environment.pusher.key, {
    cluster: this.environment.pusher.cluster,
    // encrypted: true
    // forceTLS: true
    });

    // Pusher.logToConsole = true;

    this.channel = this.pusher.subscribe('new_order');

    this.channel.bind('new_order', data => console.log(data));
   }
}