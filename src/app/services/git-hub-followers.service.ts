import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubFollowersService extends DataService{

  constructor(http : HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers',http);
   }
}
