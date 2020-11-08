import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceCaliopeInfoComponent } from './dulce-caliope-info.component';

describe('DulceCaliopeInfoComponent', () => {
  let component: DulceCaliopeInfoComponent;
  let fixture: ComponentFixture<DulceCaliopeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulceCaliopeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceCaliopeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
