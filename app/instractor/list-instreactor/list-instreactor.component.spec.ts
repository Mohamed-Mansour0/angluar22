import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstreactorComponent } from './list-instreactor.component';

describe('ListInstreactorComponent', () => {
  let component: ListInstreactorComponent;
  let fixture: ComponentFixture<ListInstreactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstreactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstreactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
