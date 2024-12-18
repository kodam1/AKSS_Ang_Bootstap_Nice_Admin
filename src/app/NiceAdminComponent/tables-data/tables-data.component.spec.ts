import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDataComponent } from './tables-data.component';

describe('TablesDataComponent', () => {
  let component: TablesDataComponent;
  let fixture: ComponentFixture<TablesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
