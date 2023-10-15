import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pContactComponent } from './p2p.contact.component';

describe('ContactComponent', () => {
  let component: P2pContactComponent;
  let fixture: ComponentFixture<P2pContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
