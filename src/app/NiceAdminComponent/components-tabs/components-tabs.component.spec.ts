import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsTabsComponent } from './components-tabs.component';

describe('ComponentsTabsComponent', () => {
  let component: ComponentsTabsComponent;
  let fixture: ComponentFixture<ComponentsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
