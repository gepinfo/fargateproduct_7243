import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcollegeComponent } from './ccollege.component';

describe('CcollegeComponent', () => {
  let component: CcollegeComponent;
  let fixture: ComponentFixture<CcollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});