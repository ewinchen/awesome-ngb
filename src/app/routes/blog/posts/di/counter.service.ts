import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CounterService {

  count$: BehaviorSubject<number>;
  count = 0;

  constructor() {
    this.count$ = new BehaviorSubject(this.count);
  }

  increment(): void {
    this.count$.next(++this.count);
  }

  decrement(): void {
    this.count$.next(--this.count);
  }

  reset(): void {
    this.count = 0;
    this.count$.next(this.count);
  }
}
