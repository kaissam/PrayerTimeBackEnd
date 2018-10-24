import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataAccessProvider } from '../../providers/data-access/data-access';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  private iqama:any = {};
  private socket:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataAccess:DataAccessProvider) {
    this.iqama = this.dataAccess.getIqama();
    this.socket = this.dataAccess.socket ;
  }


  ionViewDidLoad() {
    this.iqama = this.dataAccess.getIqama();
  }
  save(){
    this.socket.emit("iqamaTime", this.iqama) ;
  }


}

