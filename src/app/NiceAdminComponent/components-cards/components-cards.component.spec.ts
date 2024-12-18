import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCardsComponent } from './components-cards.component';

describe('ComponentsCardsComponent', () => {
  let component: ComponentsCardsComponent;
  let fixture: ComponentFixture<ComponentsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
