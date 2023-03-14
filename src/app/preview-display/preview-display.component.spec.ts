import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDisplayComponent } from './preview-display.component';

describe('PreviewDisplayComponent', () => {
  let component: PreviewDisplayComponent;
  let fixture: ComponentFixture<PreviewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
