import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileforgotComponent } from './mobileforgot.component';

describe('MobileforgotComponent', () => {
  let component: MobileforgotComponent;
  let fixture: ComponentFixture<MobileforgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileforgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
