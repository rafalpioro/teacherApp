import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentTableComponent } from './all-student-table.component';

describe('AllStudentTableComponent', () => {
  let component: AllStudentTableComponent;
  let fixture: ComponentFixture<AllStudentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
