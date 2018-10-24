import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ApiDataProvider } from './../../providers/api-data/api-data';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  info;
  infoList;

  constructor(public navCtrl: NavController, public dataService: ApiDataProvider) {
    this.dataService.getRemoteData().subscribe(data => {
      this.info = dataService;
      console.log(this.info);
      this.infoList = this.info.data.children;
    })
  }

  ionViewDidLoad() {
    console.log('HomePage has loaded');
    this.dataService.getRemoteData();
  }

}
