import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../di/counter.service';

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

  constructor(counterService: CounterService) {
    this.count$ = counterService.count$;
  }

  ngOnInit() {
  }

}
