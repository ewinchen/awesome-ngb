import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post, PostStructure } from './post';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post: PostStructure;
  fetchPost$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.fetchPost$ = this.postService.fetchPost().subscribe(post => this.post = post);
  }

  ngOnDestroy() {
    this.fetchPost$.unsubscribe();
  }

}
