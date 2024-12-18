import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAccordionComponent } from './components-accordion.component';

describe('ComponentsAccordionComponent', () => {
  let component: ComponentsAccordionComponent;
  let fixture: ComponentFixture<ComponentsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
