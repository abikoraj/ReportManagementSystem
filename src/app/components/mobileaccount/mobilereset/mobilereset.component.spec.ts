import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileresetComponent } from './mobilereset.component';

describe('MobileresetComponent', () => {
  let component: MobileresetComponent;
  let fixture: ComponentFixture<MobileresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
