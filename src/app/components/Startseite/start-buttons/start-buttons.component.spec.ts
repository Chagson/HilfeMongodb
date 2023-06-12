import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartButtonsComponent } from './start-buttons.component';
window.history.replaceState(null, 'startButton', window.location.href);
describe('StartButtonsComponent', () => {
  let component: StartButtonsComponent;
  let fixture: ComponentFixture<StartButtonsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
