import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersHostComponent } from './customers-host.component';

describe('CustomersHostComponent', () => {
  let component: CustomersHostComponent;
  let fixture: ComponentFixture<CustomersHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
