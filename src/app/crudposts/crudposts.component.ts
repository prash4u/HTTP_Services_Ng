import { CrudpostsService } from './../services/crudposts.service';
import { post } from 'selenium-webdriver/http';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import { error } from '@angular/core';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}  

@Component({
  selector: 'app-crudposts',
  templateUrl: './crudposts.component.html',
  styleUrls: ['./crudposts.component.css']
})

@Injectable()
export class CRUDPostsComponent implements OnInit{
  readonly ROOT_URL='https://jsonplaceholder.typicode.com'; //move this to services/crudpostsservice
  postNew : Observable<Post[]>;
  postNew1:Subscription;
  postNew11=[];

  //constructor(private service: CrudpostsService) {
  constructor(private http: HttpClient) {  //this implementation is moved to services/crudpostsservice
    //this.postNew =
  //  this.postNew1=  this.http                 //keep constructor clean and implement ngOnInit()
  //     .get<Post[]>(this.ROOT_URL + '/posts')
  //     .subscribe((val) =>{
  //       this.postNew11=val;
  //     })
   }

   ngOnInit()
   {
    this.postNew1=  this.http
    .get<Post[]>(this.ROOT_URL + '/posts')
    .subscribe((val) =>{
      this.postNew11=val
     }
    ,(error: any) =>{
      if(error.status === 404)
       {
         alert('This post has been deleted!');
       }
       else{
        alert('An unexpected error occured!');
        console.log(error);
       }
      
      
    });
   }
 
 CreatePost(input: HTMLInputElement){
   let postVal= {title: input.value};
  this.http.post<Post>(this.ROOT_URL + '/posts',postVal);
  this.postNew11.splice(0,0,postVal);
  //this.users.pu
  console.log(postVal);
 } 

 UpdatePost(post){
   this.http.put(this.ROOT_URL + '/posts/' + post.id,post)
   .subscribe((post)=>
    console.log(post)
    ,error =>{
      alert('An unexpected error occured!');
      console.log(error);
    }
   )
  }

  DeletePost(post){
    this.http.delete(this.ROOT_URL + '/posts/' + post.id)
    .subscribe((val) =>{
      let index = this.postNew11.indexOf(post);
      this.postNew11.splice(index,1)
    }
    ,(error: Response) =>{
        if(error.status === 404)
         {
           alert('This post has been deleted!');
         }
         else{
          alert('An unexpected error occured!');
          console.log(error);
         }
      
      
    })
    
    ;
  }

}
