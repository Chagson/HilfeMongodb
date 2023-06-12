import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmeldeButtonComponent } from './abmelde-button.component';

describe('AbmeldeButtonComponent', () => {
  let component: AbmeldeButtonComponent;
  let fixture: ComponentFixture<AbmeldeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmeldeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmeldeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
