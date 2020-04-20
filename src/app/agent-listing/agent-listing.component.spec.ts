import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentListingComponent } from './agent-listing.component';

describe('AgentListingComponent', () => {
  let component: AgentListingComponent;
  let fixture: ComponentFixture<AgentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
