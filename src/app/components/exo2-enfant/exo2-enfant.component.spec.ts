import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2EnfantComponent } from './exo2-enfant.component';

describe('Exo2EnfantComponent', () => {
  let component: Exo2EnfantComponent;
  let fixture: ComponentFixture<Exo2EnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo2EnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo2EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
