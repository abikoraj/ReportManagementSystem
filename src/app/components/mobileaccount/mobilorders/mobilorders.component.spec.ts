import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilordersComponent } from './mobilorders.component';

describe('MobilordersComponent', () => {
  let component: MobilordersComponent;
  let fixture: ComponentFixture<MobilordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
