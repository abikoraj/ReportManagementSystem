import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesignupComponent } from './mobilesignup.component';

describe('MobilesignupComponent', () => {
  let component: MobilesignupComponent;
  let fixture: ComponentFixture<MobilesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
