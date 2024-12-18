import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRegisterComponent } from './pages-register.component';

describe('PagesRegisterComponent', () => {
  let component: PagesRegisterComponent;
  let fixture: ComponentFixture<PagesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
