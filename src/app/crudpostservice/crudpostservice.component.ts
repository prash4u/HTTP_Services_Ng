import { post } from 'selenium-webdriver/http';
import { CrudpostsService } from './../services/crudposts.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}  
@Component({
  selector: 'app-crudpostservice',
  templateUrl: './crudpostservice.component.html',
  styleUrls: ['./crudpostservice.component.css']
})
export class CrudpostserviceComponent implements OnInit {

  //readonly ROOT_URL='https://jsonplaceholder.typicode.com'; //move this to services/crudpostsservice
  postNew : Observable<Post[]>;
  postNew1:Subscription;
  postNew11=[];
  errMsg;
  constructor(private service: CrudpostsService) {
  //constructor(private http: HttpClient) {  //this implementation is moved to services/crudpostsservice
    //this.postNew =
  //  this.postNew1=  this.http                 //keep constructor clean and implement ngOnInit()
  //     .get<Post[]>(this.ROOT_URL + '/posts')
  //     .subscribe((val) =>{
  //       this.postNew11=val;
  //     })
   }

   ngOnInit()
   {
    // this.postNew1=  this.http
    // .get<Post[]>(this.ROOT_URL + '/posts')
   this.postNew1= this.service.getAll().subscribe((val)=>{
    this.postNew11=val;
   },(error:HttpErrorResponse) => {
     this.errMsg=error.message;
    alert(error.message);
    }
   
   );
     
   }
 
 CreatePost(input: HTMLInputElement){
    let postVal= {title: input.value}; 
    this.postNew11.splice(0,0,postVal); //this has been shifted before the createPost method due to Optimistic call, 
                                        //as this will show no delay on browser to user and update server later         
  // this.http.post<Post>(this.ROOT_URL + '/posts',postVal); //logic implemented in crudposts.service.ts
   input.value='';
  this.service.create(postVal).subscribe((val)=>{
    null;    
  },(error:ErrorHandler) =>{
    this.postNew11.splice(0,1); //rollbacking in case of error
  }
  )
  console.log(postVal);
 } 

 UpdatePost(post){
   //this.http.put(this.ROOT_URL + '/posts/' + post.id,post)
   this.service.update(post)
   .subscribe((post)=>
    console.log(post)
   )
  }

  DeletePost(post){
    let index = this.postNew11.indexOf(post);
    this.postNew11.splice(index,1);

    this.service.delete(post+'/345') //wrong URL to get Error Handling
    .subscribe((val) =>{
      // let index = this.postNew11.indexOf(post); //Optimistic approach so moved the code above
      // this.postNew11.splice(index,1);
      null
    }, (error:ErrorHandler) =>{
      this.postNew11.splice(index,0,post); //in case of error rollbacking
    }
    // ,
    //  (error)=> {
    //    this.errMsg = error;
    //    if(error.status == 404)       
    //      alert('The record is deleted!');   
    //      else{    
    //    alert('An unexpected error occurred!');
    //    console.log(error);
    //      }
    //  }
    )
  }

}
