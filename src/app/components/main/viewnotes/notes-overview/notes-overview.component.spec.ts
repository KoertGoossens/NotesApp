import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesOverviewComponent } from './notes-overview.component';

describe('NotesOverviewComponent', () => {
  let component: NotesOverviewComponent;
  let fixture: ComponentFixture<NotesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesOverviewComponent]
    });
    fixture = TestBed.createComponent(NotesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
