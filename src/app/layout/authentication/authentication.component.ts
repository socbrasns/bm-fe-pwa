import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  template: `
    <div class="authentication">
<router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
