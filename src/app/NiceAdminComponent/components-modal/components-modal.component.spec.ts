import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsModalComponent } from './components-modal.component';

describe('ComponentsModalComponent', () => {
  let component: ComponentsModalComponent;
  let fixture: ComponentFixture<ComponentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
