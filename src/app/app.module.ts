import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage, ItemDetailPage, AddItemPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ItemDetailPage,
    AddItemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ItemDetailPage,
    AddItemPage
  ],
  providers: []
})
export class AppModule {}
