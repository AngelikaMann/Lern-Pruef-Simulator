import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpmPoolComponent } from './tpm-pool.component';

describe('TpmPoolComponent', () => {
  let component: TpmPoolComponent;
  let fixture: ComponentFixture<TpmPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpmPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpmPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
