import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesError404Component } from './pages-error-404.component';

describe('PagesError404Component', () => {
  let component: PagesError404Component;
  let fixture: ComponentFixture<PagesError404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesError404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
