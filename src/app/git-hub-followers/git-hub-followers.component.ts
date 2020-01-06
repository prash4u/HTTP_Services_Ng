import { Observable } from 'rxjs';
import { GitHubFollowersService } from '../services/git-hub-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any[];
  constructor(
    private route: ActivatedRoute,
    private service: GitHubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined =>{
      let id = combined[0].get('id');
      let page= combined[1].get('page');
      
      return this.service.getAll();
    })  
     .subscribe((followers) =>{
        this.followers = followers;
    })

    // this.service.getAll()
    // .subscribe((followers) =>{
    //   this.followers = followers;
    
  }

}
