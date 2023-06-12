import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrungenschaftenComponent } from './errungenschaften.component';

describe('ErrungenschaftenComponent', () => {
  let component: ErrungenschaftenComponent;
  let fixture: ComponentFixture<ErrungenschaftenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrungenschaftenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrungenschaftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
