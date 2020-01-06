import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubFollowersComponent } from './git-hub-followers.component';

describe('GitHubFollowersComponent', () => {
  let component: GitHubFollowersComponent;
  let fixture: ComponentFixture<GitHubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
