import { TestBed } from '@angular/core/testing';

import { CrudpostsService } from './crudposts.service';

describe('CrudpostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudpostsService = TestBed.get(CrudpostsService);
    expect(service).toBeTruthy();
  });
});
