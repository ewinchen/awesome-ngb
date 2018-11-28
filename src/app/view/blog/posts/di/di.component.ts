import { Component, OnInit } from '@angular/core';
import { CounterService } from "./counter.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-di',
  template: `
    <button class="btn btn-success" (click)="increment()">Increment</button>
    <button class="btn btn-success" (click)="decrement()">Decrement</button>
    <button class="btn btn-success" (click)="reset()">Reset Counter</button>
    <div>Current Count: {{ count$ | async }}</div>
  `,
  styles: [`
    button {
      margin-right: 10px;
    }
  `]
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
