import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterGamblingComponent } from './footer_gambling.component';


describe('FooterGamblingComponent', () => {
  let component: FooterGamblingComponent;
  let fixture: ComponentFixture<FooterGamblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterGamblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGamblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
