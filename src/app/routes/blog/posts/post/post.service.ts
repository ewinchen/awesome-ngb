import { Injectable } from '@angular/core';
import { PostStructure, Post } from './post';
import { Observable, from, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {
  }

  fetchPost(): Observable<PostStructure> {
    return interval(1000).pipe(
      map(() =>  new Post(
        'Angular rolling' + Math.random(),
        'Just try your best, but be careful, you must keep yourself be healthy',
        ['IT', 'Angular', 'Web'],
        new Date(),
        new Date()
      ))
    );
  }
}
