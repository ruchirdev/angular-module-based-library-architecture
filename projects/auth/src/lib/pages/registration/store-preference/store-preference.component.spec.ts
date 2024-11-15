import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePreferenceComponent } from './store-preference.component';

describe('StorePreferenceComponent', () => {
  let component: StorePreferenceComponent;
  let fixture: ComponentFixture<StorePreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StorePreferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
