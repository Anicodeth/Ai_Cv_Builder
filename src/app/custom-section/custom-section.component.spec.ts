import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSectionComponent } from './custom-section.component';

describe('CustomSectionComponent', () => {
  let component: CustomSectionComponent;
  let fixture: ComponentFixture<CustomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
