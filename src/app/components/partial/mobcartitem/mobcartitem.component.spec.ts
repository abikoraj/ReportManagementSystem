import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobcartitemComponent } from './mobcartitem.component';

describe('MobcartitemComponent', () => {
  let component: MobcartitemComponent;
  let fixture: ComponentFixture<MobcartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobcartitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobcartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
