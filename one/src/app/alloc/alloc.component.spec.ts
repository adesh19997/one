import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocComponent } from './alloc.component';

describe('AllocComponent', () => {
  let component: AllocComponent;
  let fixture: ComponentFixture<AllocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
