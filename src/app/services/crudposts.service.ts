import { DataService } from './data.service';
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
//import { Observable, Subscription, throwError, observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';
//import {catchError} from 'rxjs/operator';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
//import {throwError as obser} from 'rxjs';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
} 
@Injectable({
  providedIn: 'root'
})
export class CrudpostsService extends DataService {
  //readonly ROOT_URL='https://jsonplaceholder.typicode.com'; //give wrong URL to get error
  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts/',http);
  }

  // postNew1:Subscription;//Observable<Post[]>;
  // postNew11=[];
  // postNew12: Observable<Post[]>;

  // getPosts(){
  //   return this.http
  //   .get<Post[]>(this.ROOT_URL + '/posts')
  //   // .subscribe((val) =>{
  //   //   this.postNew11=val;
  //   // })
  //   //return this.postNew12.catch(this.ErrorHandler);
  //   .pipe(catchError(this.errorHandler));
  // }

  // createPost(postVal){  
  //  // return throwError(new ErrorHandler) //for simulating rollback in case of error
  //  return this.http.post<Post>(this.ROOT_URL + '/posts',postVal)  //uncomment for posting, commented for simulating rollabcking in case of error
  //  .pipe(catchError(this.errorHandler));
  // }

  // updatePost(post){
  //  return this.http.put(this.ROOT_URL + '/posts/' + post.id,post)

  // }

  // deletePosts(id){
  //   return this.http.delete(this.ROOT_URL + '/posts/' + id)
  //   .pipe(catchError(this.errorHandler));
  // }

  // errorHandler(error:HttpErrorResponse){       
  //   if(error.status === 404)
  //    alert('The Object is already deleted!');
  //   else 
  //    alert("An Unexpected Error Occured!");
  //    return throwError(error);//.message || "Server Error");
  // } 
}