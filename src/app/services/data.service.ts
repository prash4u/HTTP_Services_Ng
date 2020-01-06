import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription, throwError, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
export class DataService {
  //readonly ROOT_URL='https://jsonplaceholder.typicode.com'; //give wrong URL to get error

  //private ROOT_URL;
  constructor(private ROOT_URL,private http: HttpClient) { }

  postNew1:Subscription;//Observable<Post[]>;
  postNew11=[];
  postNew12: Observable<Post[]>;

  getAll(){
    return this.http
    .get<Post[]>(this.ROOT_URL)
    // .subscribe((val) =>{
    //   this.postNew11=val;
    // })
    //return this.postNew12.catch(this.ErrorHandler);
    .pipe(catchError(this.errorHandler));
  }

  create(resource){  
   // return throwError(new ErrorHandler) //for simulating rollback in case of error
   return this.http.post<Post>(this.ROOT_URL ,resource)  //uncomment for posting, commented for simulating rollabcking in case of error
   .pipe(catchError(this.errorHandler));
  }

  update(resource){
   return this.http.put(this.ROOT_URL +  resource.id,resource)

  }

  delete(id){
    return this.http.delete(this.ROOT_URL + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){       
    if(error.status === 404)
     alert('The Object is already deleted!');
    else 
     alert("An Unexpected Error Occured!");
     return throwError(error);//.message || "Server Error");
  } 
}