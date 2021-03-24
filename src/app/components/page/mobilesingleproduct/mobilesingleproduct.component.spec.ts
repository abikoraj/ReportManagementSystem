import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesingleproductComponent } from './mobilesingleproduct.component';

describe('MobilesingleproductComponent', () => {
  let component: MobilesingleproductComponent;
  let fixture: ComponentFixture<MobilesingleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesingleproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
