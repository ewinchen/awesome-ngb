import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from './post';
import { PostService } from './post.service';
import { Subscription, Observable } from 'rxjs';
import { CounterService } from '../di/counter.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post;
  fetchPostSub: Subscription;
  fetchPost$: Observable<Post>;
  count$: Observable<number>;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private counterService: CounterService) { }

  ngOnInit() {
    this.fetchPostSub = this.postService.fetchPost().subscribe(post => this.post = post);
    this.fetchPost$ = this.postService.fetchPost();
    this.count$ = this.counterService.count$;
  }

  ngOnDestroy() {
    this.fetchPost$ = null;
    this.fetchPostSub.unsubscribe();
  }

}
