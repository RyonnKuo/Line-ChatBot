import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPageComponent } from './registered-page.component';

describe('RegisteredPageComponent', () => {
  let component: RegisteredPageComponent;
  let fixture: ComponentFixture<RegisteredPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
