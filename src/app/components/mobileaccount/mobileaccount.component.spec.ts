import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileaccountComponent } from './mobileaccount.component';

describe('MobileaccountComponent', () => {
  let component: MobileaccountComponent;
  let fixture: ComponentFixture<MobileaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
