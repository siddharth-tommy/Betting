import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttransferComponent } from './agenttransfer.component';

describe('AgenttransferComponent', () => {
  let component: AgenttransferComponent;
  let fixture: ComponentFixture<AgenttransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenttransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
