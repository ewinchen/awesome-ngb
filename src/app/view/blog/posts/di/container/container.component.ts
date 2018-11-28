import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <app-di></app-di>
    <app-ob></app-ob>
    <hr>
    <a class="btn btn-primary" routerLink='di' routerLinkActive>di</a>
    <a class="btn btn-primary" routerLink='ob' routerLinkActive>observe</a>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    a {
      margin-right: 10px
    }
  `]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
