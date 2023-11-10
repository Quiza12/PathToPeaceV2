import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pAboutMeComponent } from './p2p.about-me.component';

describe('AboutMeComponent', () => {
  let component: P2pAboutMeComponent;
  let fixture: ComponentFixture<P2pAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
