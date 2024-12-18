import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBlankComponent } from './pages-blank.component';

describe('PagesBlankComponent', () => {
  let component: PagesBlankComponent;
  let fixture: ComponentFixture<PagesBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesBlankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
