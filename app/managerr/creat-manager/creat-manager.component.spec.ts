import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatManagerComponent } from './creat-manager.component';

describe('CreatManagerComponent', () => {
  let component: CreatManagerComponent;
  let fixture: ComponentFixture<CreatManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
