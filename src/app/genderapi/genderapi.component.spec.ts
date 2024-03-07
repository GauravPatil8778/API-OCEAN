import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderapiComponent } from './genderapi.component';

describe('GenderapiComponent', () => {
  let component: GenderapiComponent;
  let fixture: ComponentFixture<GenderapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
