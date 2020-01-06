import { TestBed } from '@angular/core/testing';

import { GitHubFollowersService } from './git-hub-followers.service';

describe('GitHubFollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubFollowersService = TestBed.get(GitHubFollowersService);
    expect(service).toBeTruthy();
  });
});
