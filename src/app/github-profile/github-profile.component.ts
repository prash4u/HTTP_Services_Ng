import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap //paramMap is used when we don't need to destroy the current component and navigate to different url(like 'id here')
     .subscribe((params) =>{
       let id= params.get('id');
       let uname= params.get('username1');
       console.log(id,uname);
       
     })
  }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams:{ page:1, order: 'newest'}
    })
  }

}
