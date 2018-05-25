import { Component, OnInit } from '@angular/core';
import { CounterService } from "./counter.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-di',
  template: `
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `,
  styles: []
})
export class DiComponent implements OnInit {

  count$: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.count$ = this.counterService.count$;
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
