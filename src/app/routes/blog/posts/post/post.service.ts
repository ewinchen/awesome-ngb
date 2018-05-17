import { Injectable } from '@angular/core';
import { PostStructure, Post } from './post';
import { Observable, from, of, interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post: Array<PostStructure>;

  constructor(private http: HttpClient) {
    this.post = [
      new Post(
        'Angular rolling 1',
        'Just try your best, but be careful, you must keep yourself be healthy',
        ['IT', 'Angular', 'Web'],
        new Date(),
        new Date()
      ),
      new Post(
        'Angular rolling 2',
        'Just try your best, but be careful, you must keep yourself be healthy',
        ['IT', 'Angular', 'Web'],
        new Date(),
        new Date()
      ),
      new Post(
        'Angular rolling 3',
        'Just try your best, but be careful, you must keep yourself be healthy',
        ['IT', 'Angular', 'Web'],
        new Date(),
        new Date()
      ),
      new Post(
        'Angular rolling 4',
        'Just try your best, but be careful, you must keep yourself be healthy',
        ['IT', 'Angular', 'Web'],
        new Date(),
        new Date()
      ),
    ];
  }

  fetchPost(): Observable<PostStructure> {
    return from(this.post);
  }
}
