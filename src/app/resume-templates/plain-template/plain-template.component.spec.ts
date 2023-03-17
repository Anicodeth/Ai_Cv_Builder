import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainTemplateComponent } from './plain-template.component';

describe('PlainTemplateComponent', () => {
  let component: PlainTemplateComponent;
  let fixture: ComponentFixture<PlainTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
