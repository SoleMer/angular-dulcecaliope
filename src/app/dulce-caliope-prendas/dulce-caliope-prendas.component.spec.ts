import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceCaliopePrendasComponent } from './dulce-caliope-prendas.component';

describe('DulceCaliopePrendasComponent', () => {
  let component: DulceCaliopePrendasComponent;
  let fixture: ComponentFixture<DulceCaliopePrendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulceCaliopePrendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceCaliopePrendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
