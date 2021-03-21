import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { HeadercomponentComponent } from './components/partial/headercomponent/headercomponent.component';
import { FootercomponentComponent } from './components/partial/footercomponent/footercomponent.component';
import { HomeComponent } from './components/page/home/home.component';
import { HeadercartComponent } from './components/partial/headercart/headercart.component';
import { ItemsComponent } from './components/partial/items/items.component';
import { ProductsComponent } from './components/partial/products/products.component';
import { MobileheaderComponent } from './components/partial/mobileheader/mobileheader.component';
import { MobilefooterComponent } from './components/partial/mobilefooter/mobilefooter.component';
import { SearchComponent } from './components/page/search/search.component';
import { MobsearchComponent } from './components/page/mobsearch/mobsearch.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:"",
    component:MaincomponentComponent,
    children:[
      {path:"home",component:HomeComponent},
      {path:"search",component:SearchComponent}
    ],

  },
  {
    path:"mobsearch",
    component:MobsearchComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    HomeComponent,
    HeadercartComponent,
    ItemsComponent,
    ProductsComponent,
    MobileheaderComponent,
    MobilefooterComponent,
    SearchComponent,
    MobsearchComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
