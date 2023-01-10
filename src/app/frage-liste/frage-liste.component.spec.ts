import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrageListeComponent } from './frage-liste.component';

describe('FrageListeComponent', () => {
  let component: FrageListeComponent;
  let fixture: ComponentFixture<FrageListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrageListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrageListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
