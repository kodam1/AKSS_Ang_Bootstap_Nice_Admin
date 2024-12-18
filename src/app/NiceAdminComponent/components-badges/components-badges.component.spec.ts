import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBadgesComponent } from './components-badges.component';

describe('ComponentsBadgesComponent', () => {
  let component: ComponentsBadgesComponent;
  let fixture: ComponentFixture<ComponentsBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
