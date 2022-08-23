import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrationComponent } from './form-registration.component';

describe('FormRegistrationComponent', () => {
  let component: FormRegistrationComponent;
  let fixture: ComponentFixture<FormRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
