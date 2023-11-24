import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotesComponent } from './viewnotes.component';

describe('ViewnotesComponent', () => {
  let component: ViewnotesComponent;
  let fixture: ComponentFixture<ViewnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewnotesComponent]
    });
    fixture = TestBed.createComponent(ViewnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
