import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernTemplateGreenComponent } from './modern-template-green.component';

describe('ModernTemplateGreenComponent', () => {
  let component: ModernTemplateGreenComponent;
  let fixture: ComponentFixture<ModernTemplateGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernTemplateGreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernTemplateGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
