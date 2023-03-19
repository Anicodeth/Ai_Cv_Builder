import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAndSocialLinksComponent } from './website-and-social-links.component';

describe('WebsiteAndSocialLinksComponent', () => {
  let component: WebsiteAndSocialLinksComponent;
  let fixture: ComponentFixture<WebsiteAndSocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteAndSocialLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteAndSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
