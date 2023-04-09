import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesChooserComponent } from './templates-chooser.component';

describe('TemplatesChooserComponent', () => {
  let component: TemplatesChooserComponent;
  let fixture: ComponentFixture<TemplatesChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
