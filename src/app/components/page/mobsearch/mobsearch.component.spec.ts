import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsearchComponent } from './mobsearch.component';

describe('MobsearchComponent', () => {
  let component: MobsearchComponent;
  let fixture: ComponentFixture<MobsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
