import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrageListItemComponent } from './frage-list-item.component';

describe('FrageListItemComponent', () => {
  let component: FrageListItemComponent;
  let fixture: ComponentFixture<FrageListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrageListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrageListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
