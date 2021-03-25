import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ShopComponent } from './components/page/shop/shop.component';
import { MobileshopComponent } from './components/page/mobileshop/mobileshop.component';
import { PaginationComponent } from './components/partial/pagination/pagination.component';
import { AccountComponent } from './components/account/account.component';
import { MobileaccountComponent } from './components/mobileaccount/mobileaccount.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { ForgotComponent } from './components/account/forgot/forgot.component';
import { OtpComponent } from './components/account/otp/otp.component';
import { ResetComponent } from './components/account/reset/reset.component';
import { FavsComponent } from './components/account/favs/favs.component';
import { HistoryComponent } from './components/account/history/history.component';
import { FavService } from './services/fav.service';
import { OrdersComponent } from './components/account/orders/orders.component';
import { AuthService } from './services/auth.service';
import { SingleorderComponent } from './components/account/orders/singleorder/singleorder.component';
import { OrderscontainerComponent } from './components/account/orderscontainer/orderscontainer.component';
import { CollectionComponent } from './components/pages/collection/collection.component';
import { SinglecollectionComponent } from './components/pages/collection/singlecollection/singlecollection.component';
import { CollectionitemComponent } from './components/pages/collection/collectionitem/collectionitem.component';
import { MobilehomeComponent } from './components/page/mobilehome/mobilehome.component';
import { AdsComponent } from './components/mobilehome/ads/ads.component';
import { CarouselComponent } from './components/mobilehome/carousel/carousel.component';
import { CustomComponent } from './components/mobilehome/custom/custom.component';
import { MobileloginComponent } from './components/mobileaccount/mobilelogin/mobilelogin.component';
import { MobilesignupComponent } from './components/mobileaccount/mobilesignup/mobilesignup.component';
import { MobileforgotComponent } from './components/mobileaccount/mobileforgot/mobileforgot.component';
import { MobileresetComponent } from './components/mobileaccount/mobilereset/mobilereset.component';
import { MobilordersComponent } from './components/mobileaccount/mobilorders/mobilorders.component';
import { PforgotComponent } from './components/mobileaccount/pforgot/pforgot.component';
import { PresetComponent } from './components/mobileaccount/preset/preset.component';
import { ProfileComponent } from './components/mobileaccount/profile/profile.component';
import { ChangepasswordComponent } from './components/mobileaccount/changepassword/changepassword.component';
import { AllfavComponent } from './components/mobileaccount/allfav/allfav.component';
import { AllviewComponent } from './components/mobileaccount/allview/allview.component';

const routes:Routes=[
  {
    path:"",
    component:MaincomponentComponent,
    children:[
      {path:"home",component:window.innerWidth>768?HomeComponent:MobilehomeComponent},
      {path:"search",component:SearchComponent},
      {path:"cart",component:window.innerWidth>768? CartComponent:MobilecartComponent},
      {path:"shop",component:window.innerWidth>768? ShopComponent:MobileshopComponent},
      {path:"collection",component:CollectionComponent},
      {path:"collection",component:CollectionComponent},
      {path:"collection/:id",component: SinglecollectionComponent},
      {path:"account",component:window.innerWidth>768? AccountComponent:MobileaccountComponent,
        children:[
          {path:"login",component:LoginComponent},
          {path:"signup",component:SignupComponent},
          {path:"forgot",component:ForgotComponent},
          {path:"otp",component:OtpComponent},
          {path:"reset",component:ResetComponent},
          {path:"history",component:HistoryComponent},
          {path:"favs",component:FavsComponent},
          {path:"orders",component:OrderscontainerComponent,canActivate:[AuthService],
          children:[
            {path:":status",component:OrdersComponent},
            { path: '',   redirectTo: '/account/orders/0', pathMatch: 'full' },
            
          ]
        },
        ]
      }

    ],

  },
  {path:"mobilecollection/:id",component: SinglecollectionComponent},

  {
    path:"mobsearch",
    component:MobsearchComponent
  },
  {
    path:"mobilelogin",
    component:MobileloginComponent
  },
  {
    path:"mobilesignup",
    component:MobilesignupComponent
  },
  {
    path:"mobileforgot",
    component:PforgotComponent
  },
  {
    path:"mobilereset",
    component:PresetComponent
  },
  {
    path:"mobileprofile",
    component:ProfileComponent
  },
  {
    path:"allfav",
    component:AllfavComponent
  },
  {
    path:"allview",
    component:AllviewComponent
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
    MobcartitemComponent,
    ShopComponent,
    MobileshopComponent,
    PaginationComponent,
    AccountComponent,
    MobileaccountComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    OtpComponent,
    ResetComponent,
    FavsComponent,
    HistoryComponent,
    OrdersComponent,
    
    SingleorderComponent,
    OrderscontainerComponent,
    CollectionComponent,
    SinglecollectionComponent,
    CollectionitemComponent,
    MobilehomeComponent,
    AdsComponent,
    CarouselComponent,
    CustomComponent,
    MobileloginComponent,
    MobilesignupComponent,
    MobileforgotComponent,
    MobileresetComponent,
    MobilordersComponent,
    PforgotComponent,
    PresetComponent,
    ProfileComponent,
    ChangepasswordComponent,
    AllfavComponent,
    AllviewComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
