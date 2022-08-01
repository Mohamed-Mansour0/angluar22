import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatInstreactorComponent } from './creat-instreactor.component';

describe('CreatInstreactorComponent', () => {
  let component: CreatInstreactorComponent;
  let fixture: ComponentFixture<CreatInstreactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatInstreactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatInstreactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
