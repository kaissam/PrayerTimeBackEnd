import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as data from '../../data/dinosaurs.json' ;
import * as iqama from '../../data/iqamaTime.json' ;
import { Storage } from '@ionic/storage'
import * as io from 'socket.io-client';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Injectable()
export class DataAccessProvider {

  public socket:any={};
  public iqama:any={};

  constructor(public http: HttpClient, private storage:Storage) {
    var self = this;
    self.socket = io("https://my-node-socket.herokuapp.com/");

    // self.socket = io("http://localhost:3000/");
    // this.storage.get('iqama').then((val)=>{
    //   self.iqama = val;
    //   console.log("self.iqama", self.iqama)
    //  });

  }

    setIqama(data){
      this.storage.set('iqama', data);
    }

    getIqama(){
     return this.iqama ;
    }

    getPrayerTimes():any{
      return  PrayTimes('ISNA').getTimes(new Date, [45.4594, -73.5501], -5);
    }
  }



