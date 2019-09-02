import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSongComponentComponent } from './link-song-component.component';

describe('LinkSongComponentComponent', () => {
  let component: LinkSongComponentComponent;
  let fixture: ComponentFixture<LinkSongComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSongComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSongComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
