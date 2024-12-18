import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSpinnersComponent } from './components-spinners.component';

describe('ComponentsSpinnersComponent', () => {
  let component: ComponentsSpinnersComponent;
  let fixture: ComponentFixture<ComponentsSpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsSpinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
