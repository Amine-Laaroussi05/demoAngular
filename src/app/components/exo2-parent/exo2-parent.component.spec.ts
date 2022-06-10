import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2ParentComponent } from './exo2-parent.component';

describe('Exo2ParentComponent', () => {
  let component: Exo2ParentComponent;
  let fixture: ComponentFixture<Exo2ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo2ParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
