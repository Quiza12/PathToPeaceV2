import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pCoachingComponent } from './p2p.coaching.component';

describe('CoachingComponent', () => {
  let component: P2pCoachingComponent;
  let fixture: ComponentFixture<P2pCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
