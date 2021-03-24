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
import { SingleproductComponent } from './components/page/singleproduct/singleproduct.component';
import { VariantComponent } from './components/partial/variant/variant.component';
import { VariantitemComponent } from './components/partial/variant/variantitem/variantitem.component';
import { ReviewsComponent } from './components/partial/reviews/reviews.component';
import { ReviewComponent } from './components/partial/review/review.component';
import { QtyComponent } from './components/partial/qty/qty.component';
import { MobilesingleproductComponent } from './components/page/mobilesingleproduct/mobilesingleproduct.component';
import { CartComponent } from './components/page/cart/cart.component';
import { MobilecartComponent } from './components/page/mobilecart/mobilecart.component';
import { CartitemComponent } from './components/partial/cartitem/cartitem.component';
import { MobcartitemComponent } from './components/partial/mobcartitem/mobcartitem.component';

const routes:Routes=[
  {
    path:"",
    component:MaincomponentComponent,
    children:[
      {path:"home",component:HomeComponent},
      {path:"search",component:SearchComponent},
      {path:"cart",component:CartComponent},
      {path:"product/:id",component: SingleproductComponent},
      {
        path:"mobcart",
        component:MobilecartComponent
      },
    ],

  },
  {
    path:"mobsearch",
    component:MobsearchComponent
  },
 
  {
    path:"mobproduct/:id",
    component:MobilesingleproductComponent
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
    SingleproductComponent,
    VariantComponent,
    VariantitemComponent,
    ReviewsComponent,
    ReviewComponent,
    QtyComponent,
    MobilesingleproductComponent,
    CartComponent,
    MobilecartComponent,
    CartitemComponent,
    MobcartitemComponent
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
