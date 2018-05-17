import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post, PostStructure } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: PostStructure;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    // this.post = new Post(
    //   'Angular rolling',
    //   'Just try your best, but be careful, you must keep yourself be healthy',
    //   ['IT', 'Angular', 'Web'],
    //   new Date(),
    //   new Date()
    // );
    this.postService.fetchPost().subscribe(post => this.post = post);
  }

}
