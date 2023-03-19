import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionsComponent } from './add-sections.component';

describe('AddSectionsComponent', () => {
  let component: AddSectionsComponent;
  let fixture: ComponentFixture<AddSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
