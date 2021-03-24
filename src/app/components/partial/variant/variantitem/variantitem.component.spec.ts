import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantitemComponent } from './variantitem.component';

describe('VariantitemComponent', () => {
  let component: VariantitemComponent;
  let fixture: ComponentFixture<VariantitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
