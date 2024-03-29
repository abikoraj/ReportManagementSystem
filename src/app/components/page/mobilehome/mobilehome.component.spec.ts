import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilehomeComponent } from './mobilehome.component';

describe('MobilehomeComponent', () => {
  let component: MobilehomeComponent;
  let fixture: ComponentFixture<MobilehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
