import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Setting } from 'src/app/model/setting';
import { Variant } from 'src/app/Models/variant';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FavService } from 'src/app/services/fav.service';
import { VariantService } from 'src/app/services/variant.service';
import { ViewedService } from 'src/app/services/viewed.service';
import { QtyComponent } from '../../partial/qty/qty.component';

@Component({
  selector: 'app-mobilesingleproduct',
  templateUrl: './mobilesingleproduct.component.html',
  styleUrls: ['./mobilesingleproduct.component.scss']
})
export class MobilesingleproductComponent implements OnInit {
  active=false;
  currentImage:String="";
  images:string[]=[ ];
  showdetail=false;
  detailbtntxt="Show More";
  id:string;
  product:any;
  variants:Variant[]=[];
  cv:any;
  code:string="";
  stock=0;
  oldprice=0;
  price=0;
  selvariants = [];
  selectedTab=1;
  variant = 'none';
  @ViewChild('qty') qtyholder: QtyComponent;
  ngOnInit(): void {
    this.loadDetail();
    window.scrollTo({
      top:0
    });
  }

  selectImage(image){
    this.currentImage=image;
  }



  toogleDetail(){
    this.showdetail=!this.showdetail;
    if(this.showdetail){
      this.detailbtntxt="Hide Details";
    }else{
      this.detailbtntxt="Show More";
    }
  }

  

 constructor(
    // private loader: LoaderService,
    public client: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public fav: FavService,
    public location: Location,
    public cart: CartService,
    public viewservice: ViewedService,
    private variantevent: VariantService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

  }
  loadDetail(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.client
      .get( 'product/' + this.id)
      .subscribe((res: any) => {
        this.product = res;
        this.viewservice.add(
          this.product.product_id,
          this.product.product_name,
          this.product.product_images
        );
        this.active = this.fav.favs.includes(this.product.product_id);
        if (this.product.stocktype == 1) {
          this.product.variants.forEach((attr) => {
            let v = new Variant();
            v.title = attr.name;
            v.id = attr.id;
            v.variants = [];
            attr.options.forEach((op) => {
              v.variants.push(op);
            });
            this.variants.push(v);
          });
          if (this.product.stocks.length > 0) {
            this.variantevent.setVariant(this.product.stocks[0].variantdetail);
            this.cv = this.product.stocks[0].variantdetail;
            this.code = this.product.stocks[0].code;
            this.setStock();
          }
        } else {
          this.price = this.product.newprice;
          if (this.product.onsale) {
            this.oldprice = this.product.oldprice;
          }
          this.stock = this.product.quantity;
        }

        var tempimages = [];
        tempimages.push(Setting.url + this.product.product_images);
        this.product.images.forEach((img) => {
          tempimages.push(Setting.url + img.image);
        });

        this.images = tempimages;
        this.currentImage=this.images[0];
        
      });
    // });
  }

  //choose a variant
  choose(event) {
    console.log(event);
    let i = this.selvariants.findIndex((obj) => obj.vid == event.vid);
    console.log(i);
    if (i > -1) {
      this.selvariants[i].opid = event.opid;
    } else {
      this.selvariants.push(event);
    }

    console.log('choosing variant', this.selvariants);
    this.makecode();

    // this.variantevent.selvariant(this.selvariants);
  }
  setStock() {
    this.stock = 0;
    this.price = 0;
    this.oldprice = 0;
    this.product.stocks.forEach((stock) => {
      if (stock.code == this.code) {
        this.stock = stock.qty;
        this.price = stock.price;
        this.oldprice = stock.saleprice;
      }
    });
    console.log(this.stock);
  }
  makecode() {
    let data = [];
    let c = 'prod_' + this.product.product_id + '>';
    this.selvariants.forEach((selvariant) => {
      data.push('attr_' + selvariant.vid + ':' + selvariant.opid);
    });
    c += data.join('|');
    console.log('made code', c);
    console.log('old code', this.code);
    this.code = c;
    this.setStock();
  }
  back(){
    this.location.back();
  }

  addToCart() {
    this.cart.addToCart(
      this.product.product_id,
      this.product.product_name,
      this.product.product_images,
      this.qtyholder.qty,
      this.price,
      this.variant
    );
    this.router.navigate(['/cart']);
  }

  manageFav(id) {
    this.fav.addFav(id,this.product.product_name,this.images[0]);
    this.active = this.fav.includes(this.product.product_id);
  }
}
