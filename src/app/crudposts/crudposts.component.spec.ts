import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDPostsComponent } from './crudposts.component';

describe('CRUDPostsComponent', () => {
  let component: CRUDPostsComponent;
  let fixture: ComponentFixture<CRUDPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
