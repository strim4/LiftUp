import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TagesbeschaftigungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tagesbeschaftigung',
  templateUrl: 'tagesbeschaftigung.html',
})
export class TagesbeschaftigungPage {

  public allList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allList=[{
      name:'NES',
      values:'nes',
      flag:0
    },{
      name:'Nintendo64',
      values:'n64',
      flag:0
    },{
      name:'PlayStation',
      values:'ps',
      flag:0
    }];
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagesbeschaftigungPage');
  }

  valuechange(key){
  
    for(let i = 0 ; i < this.allList.length ; i++){
      if( this.allList[i].values==key){
        this.allList[i].flag=1;
      }else{
        this.allList[i].flag=0;
      }
    }

}
}