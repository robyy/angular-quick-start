import { Component } from '@angular/core';

// <router-outlet>: now dynamic, depending on whatever route URL we're at
@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
