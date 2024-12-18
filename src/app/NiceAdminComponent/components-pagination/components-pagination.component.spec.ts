import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPaginationComponent } from './components-pagination.component';

describe('ComponentsPaginationComponent', () => {
  let component: ComponentsPaginationComponent;
  let fixture: ComponentFixture<ComponentsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
