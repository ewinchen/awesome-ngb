import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = [
    {
      title: 'Be Happy',
      content: 'You are the best, just go ahead!'
    },
    {
      title: 'Be Healthy',
      content: 'What can you do like a sick cat?'
    },
    {
      title: 'Keep Learning',
      content: 'Stay hungery, stay foolish.'
    },
    {
      title: 'Keep Fighting',
      content: 'Someone dies in peace.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
