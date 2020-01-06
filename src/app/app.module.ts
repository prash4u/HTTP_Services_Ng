import { GitHubFollowersService } from './services/git-hub-followers.service';
//import { CrudpostsService } from './crudposts.service';
import { CrudpostsService } from './services/crudposts.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {GitHubFollowersComponent} from './git-hub-followers/git-hub-followers.component'
import {GithubProfileComponent} from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CRUDPostsComponent } from './crudposts/crudposts.component';
import { CrudpostserviceComponent } from './crudpostservice/crudpostservice.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    PostsComponent,
    NavbarComponent, 
    HomeComponent,
    GitHubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    CRUDPostsComponent,
    CrudpostserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'followers/:id/:username1',component:GithubProfileComponent},
      {path:'followers',component:GitHubFollowersComponent},      
      {path:'posts',component:CrudpostserviceComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [
    ErrorHandler,
    CrudpostsService,
    GitHubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
