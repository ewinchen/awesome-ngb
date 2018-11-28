import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ob',
  template: `
    <p>
      Observable Current Count:  {{count$ | async}}
    </p>
  `,
  styles: []
})
export class ObComponent implements OnInit {

  count$: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.count$ = this.counterService.count$;
  }

}
