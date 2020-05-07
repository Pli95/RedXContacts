import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactPageComponent } from './create-contact-page.component';

describe('CreateContactPageComponent', () => {
  let component: CreateContactPageComponent;
  let fixture: ComponentFixture<CreateContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
