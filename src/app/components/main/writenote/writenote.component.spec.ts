import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritenoteComponent } from './writenote.component';

describe('WritenoteComponent', () => {
  let component: WritenoteComponent;
  let fixture: ComponentFixture<WritenoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritenoteComponent]
    });
    fixture = TestBed.createComponent(WritenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
