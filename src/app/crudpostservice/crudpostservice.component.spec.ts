import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpostserviceComponent } from './crudpostservice.component';

describe('CrudpostserviceComponent', () => {
  let component: CrudpostserviceComponent;
  let fixture: ComponentFixture<CrudpostserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudpostserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpostserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
