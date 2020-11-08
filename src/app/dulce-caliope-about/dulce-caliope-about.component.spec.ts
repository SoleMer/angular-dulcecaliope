import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceCaliopeAboutComponent } from './dulce-caliope-about.component';

describe('DulceCaliopeAboutComponent', () => {
  let component: DulceCaliopeAboutComponent;
  let fixture: ComponentFixture<DulceCaliopeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulceCaliopeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceCaliopeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
