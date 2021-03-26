import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  sliders: any[] = [];
  topProducts: any[] = [];
  featuredProducts: any[] = [];
  sliderloaded = false;
  topLoaded = false;
  featuredLoaded = false;
  constructor(private client: ApiService) {
    this.loadSliders();
    this.loadTopProducts();
    this.loadFeaturedProducts();
  }

  loadSliders() {
    if (!this.sliderloaded) {
      this.client.get('sliders').subscribe(
        (res: any) => {
          this.sliders = res;
          console.log(res);
          this.sliderloaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  loadTopProducts() {
    if (!this.topLoaded) {
      this.client.get('top').subscribe(
        (res: any) => {
          this.topProducts = res;
          console.log(res);
          this.topLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  loadFeaturedProducts() {
    if (!this.featuredLoaded) {
      this.client.get('featured').subscribe(
        (res: any) => {
          this.featuredProducts = res;
          console.log(res);
          this.featuredLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
