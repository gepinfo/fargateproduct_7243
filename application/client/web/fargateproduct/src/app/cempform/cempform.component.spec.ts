import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CempformComponent } from './cempform.component';

describe('CempformComponent', () => {
  let component: CempformComponent;
  let fixture: ComponentFixture<CempformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CempformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});