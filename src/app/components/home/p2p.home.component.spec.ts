import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pHomeComponent } from './p2p.home.component';

describe('LandingComponent', () => {
  let component: P2pHomeComponent;
  let fixture: ComponentFixture<P2pHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
