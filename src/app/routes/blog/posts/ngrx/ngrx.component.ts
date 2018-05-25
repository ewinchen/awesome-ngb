import { Component, OnInit } from '@angular/core';
import { INCREMENT, DECREMENT, RESET } from '../../../../core/counterReducer';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";

interface AppState {
  count: number;
}

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  count$: Observable<number>;


  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count', 'count'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
  reset() {
    this.store.dispatch({ type: RESET });
  }

}
