import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsProgressComponent } from './components-progress.component';

describe('ComponentsProgressComponent', () => {
  let component: ComponentsProgressComponent;
  let fixture: ComponentFixture<ComponentsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
