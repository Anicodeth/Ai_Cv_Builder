import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLinksComponent } from './website-links.component';

describe('WebsiteLinksComponent', () => {
  let component: WebsiteLinksComponent;
  let fixture: ComponentFixture<WebsiteLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
