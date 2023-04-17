import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernTemplateComponent } from './modern-template.component';

describe('ModernTemplateComponent', () => {
  let component: ModernTemplateComponent;
  let fixture: ComponentFixture<ModernTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
