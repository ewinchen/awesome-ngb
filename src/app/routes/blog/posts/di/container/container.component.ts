import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <a routerLink='di' routerLinkActive>di</a>
    <a routerLink='ob' routerLinkActive>observe</a>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
