import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from './post';
import { PostService } from './post.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post;
  fetchPostSub: Subscription;
  fetchPost$: Observable<Post>;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.fetchPostSub = this.postService.fetchPost().subscribe(post => this.post = post);
    this.fetchPost$ = this.postService.fetchPost();
  }

  ngOnDestroy() {
    this.fetchPost$ = null;
    this.fetchPostSub.unsubscribe();
  }

}
