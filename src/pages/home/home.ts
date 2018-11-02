import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataAccessProvider } from '../../providers/data-access/data-access';
import { DetailsPage } from '../../pages/details/details';
import * as io from 'socket.io-client';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  self = this;
  private char1:string  ;
  private char2:string  ;
  private char3:string  ;
  private charlist:Array<string> = [];
  private dinosaurs:Array<any> = [] ;
  private iqama:any = {} ;
  private isLoading:boolean;

  private combination:string = "***%%";
  private prayTimeModel:any ;
  constructor(public navCtrl: NavController, private dataAccess:DataAccessProvider, private ngZone:NgZone, ) {

    this.prayTimeModel = this.dataAccess.getPrayerTimes();
    this.char1 = "*" ;
    this.char2 = "+" ;
    this.char3 = "%" ;
    this.charlist = [];



  }
  ionViewWillEnter() {
    var self = this;
    this.isLoading = true ;
    this.dataAccess.socket.on('error',(error)=>{
      this.reload() ;
    })
    this.dataAccess.socket.on('iqamaTime', function(time){
      self.iqama = time;
      self.dataAccess.setIqama(time)
      self.isLoading = false ;
    });
  }




  validateCombination(){
    if(this.charlist.length >=5){
      var start = this.charlist.length -5 ;
      var end = this.charlist.length ;
      var comb  = this.charlist.slice(start,end).join("") ;
      if(comb === this.combination){
        this.navCtrl.push(DetailsPage,{iqama:this.iqama})
      }
    }

    if(this.charlist.length == 50) this.charlist = [] ;
  }


  reload(){
    window.location.reload();
  }

  fun1(){
    this.charlist.push(this.char1);
    this.validateCombination()
  }
  fun2(){
    this.charlist.push(this.char2);
    this.validateCombination()
  }
  fun3(){
    this.charlist.push(this.char3);
    this.validateCombination()
  }

  fun4(){

  }
  fun5(){

  }
  fun6(){

  }

}
