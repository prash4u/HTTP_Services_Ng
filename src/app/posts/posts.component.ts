
import * as Rx from 'rxjs/Rx';
import { Component,Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import { post } from 'selenium-webdriver/http';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}  

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

@Injectable()
export class PostsComponent{
posts: Observable<Post[]>;
posts2: Observable<Post[]>;
posts3: Observable<Post[]>;
 posts11: Subscription;
  pos:Array<Post>;
  posts1:Observable<any>;
  newpost:Observable<any>;
  posts111 = [];
  readonly ROOT_URL='https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    this.posts11 = this.http
       .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .subscribe((val) => {
         this.posts111=val;
        //this.posts2= Observable.of(val)
       });
        //.map(post => post.toString)
  }

  getPosts() {
    this.posts1 = this.http.get(this.ROOT_URL + '/posts');         
     }

     //strongly typed get method by using interface Post
     getPosts1() {
      this.posts2 = this.http.get<Post[]>(this.ROOT_URL + '/posts');                    
       }

       //set parameters using HttpParams()
       getPosts2(){
         let params =new HttpParams().set('userId','1');
         this.posts1 = this.http.get(this.ROOT_URL + '/posts' , {params});     
       }

       getPosts3(){
        let headers =new HttpHeaders().set('Authorization','auth-token');
        this.posts1 = this.http.get(this.ROOT_URL + '/posts' , {headers});     
      }
    

      CreatePost(){
        const data:Post ={
          id: null,
          userId: 23,
          title: 'My new Post',
          body:'Hello World'
        }

       // this.newpost=this.http.post(this.ROOT_URL+'/posts',data)

       this.newpost=this.http.post<Post>(this.ROOT_URL+'/posts',data)
        .map(post => post.title) //only title value will be posted
      }

      CreatePost2(){
        const data:Post ={
          id: null,
          userId: 23,
          title: 'My new Post',
          body:'Hello World'
        }

       // this.newpost=this.http.post(this.ROOT_URL+'/posts',data)

       this.newpost=this.http.post<Post>(this.ROOT_URL+'/foo',data) //Wrong URL
        .retry(3)
        .catch(err => {
          console.log(err)
          return Observable.of(err)
        }

        )
      }

      
  }



