import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTemplateComponent } from './generic-template.component';

describe('GenericTemplateComponent', () => {
  let component: GenericTemplateComponent;
  let fixture: ComponentFixture<GenericTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
