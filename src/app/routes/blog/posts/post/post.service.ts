import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, from, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {
  }

  fetchPost(): Observable<Post> {
    return interval(1000).pipe(
      map(() => new Post(
        'Angular rolling ' + Math.floor(Math.random() * 100),
        'Just try your best, but be careful, you must keep yourself healthy',
        ['IT', 'Angular', 'Web'],
        new Date(),
        new Date()
      ))
    );
  }
}
