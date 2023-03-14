import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetailsComponent } from './personaldetails.component';

describe('PersonaldetailsComponent', () => {
  let component: PersonaldetailsComponent;
  let fixture: ComponentFixture<PersonaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
