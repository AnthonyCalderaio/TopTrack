import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenComponentComponent } from './listen-component.component';

describe('ListenComponentComponent', () => {
  let component: ListenComponentComponent;
  let fixture: ComponentFixture<ListenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
