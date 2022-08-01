import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstreactorComponent } from './update-instreactor.component';

describe('UpdateInstreactorComponent', () => {
  let component: UpdateInstreactorComponent;
  let fixture: ComponentFixture<UpdateInstreactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInstreactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstreactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
