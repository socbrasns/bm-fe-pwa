import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  template: `
  <app-menu-bar-home></app-menu-bar-home>
    <div class="authentication">
<router-outlet></router-outlet>
<!--<app-theme-selector></app-theme-selector>-->
    </div>
  `,
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
