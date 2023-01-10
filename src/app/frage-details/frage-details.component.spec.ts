import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrageDetailsComponent } from './frage-details.component';

describe('FrageDetailsComponent', () => {
  let component: FrageDetailsComponent;
  let fixture: ComponentFixture<FrageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
