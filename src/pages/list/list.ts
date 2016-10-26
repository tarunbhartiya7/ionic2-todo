import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailPage, AddItemPage } from '../pages';
/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {}

  items = [
    {
      title: 'Hello', 
      description: 'This is just your basic card with some text to boot. Like it?  Keep scrolling...'
    },
    {
      title: 'Hi', 
      description: 'The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.'
    },
    {title: 'Hey', description: 'Hey there!!!'}
  ];

  addItem(){
    this.navCtrl.push(AddItemPage);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, item);
  }





}
