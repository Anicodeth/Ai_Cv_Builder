import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePreviewWindowComponent } from './template-preview-window.component';

describe('TemplatePreviewWindowComponent', () => {
  let component: TemplatePreviewWindowComponent;
  let fixture: ComponentFixture<TemplatePreviewWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePreviewWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePreviewWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
