import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;

  count$: Observable<number>;

  constructor(store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

}
