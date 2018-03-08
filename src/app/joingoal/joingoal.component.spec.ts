import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoingoalComponent } from './joingoal.component';

describe('JoingoalComponent', () => {
  let component: JoingoalComponent;
  let fixture: ComponentFixture<JoingoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoingoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoingoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
