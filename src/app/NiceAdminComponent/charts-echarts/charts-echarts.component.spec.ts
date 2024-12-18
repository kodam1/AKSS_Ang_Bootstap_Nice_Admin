import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsEchartsComponent } from './charts-echarts.component';

describe('ChartsEchartsComponent', () => {
  let component: ChartsEchartsComponent;
  let fixture: ComponentFixture<ChartsEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsEchartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
