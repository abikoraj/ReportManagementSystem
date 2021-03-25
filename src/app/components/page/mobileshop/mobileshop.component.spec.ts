import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileshopComponent } from './mobileshop.component';

describe('MobileshopComponent', () => {
  let component: MobileshopComponent;
  let fixture: ComponentFixture<MobileshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
