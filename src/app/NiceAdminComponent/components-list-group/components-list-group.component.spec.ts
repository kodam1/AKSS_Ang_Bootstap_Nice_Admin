import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsListGroupComponent } from './components-list-group.component';

describe('ComponentsListGroupComponent', () => {
  let component: ComponentsListGroupComponent;
  let fixture: ComponentFixture<ComponentsListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsListGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
