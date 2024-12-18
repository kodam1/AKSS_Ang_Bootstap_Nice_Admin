import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsTooltipsComponent } from './components-tooltips.component';

describe('ComponentsTooltipsComponent', () => {
  let component: ComponentsTooltipsComponent;
  let fixture: ComponentFixture<ComponentsTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsTooltipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
