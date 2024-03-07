import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteapiComponent } from './quoteapi.component';

describe('QuoteapiComponent', () => {
  let component: QuoteapiComponent;
  let fixture: ComponentFixture<QuoteapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuoteapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
