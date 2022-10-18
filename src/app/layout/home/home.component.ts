import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <header>
      <nav class="navbar fixed-top navbar-dark bg-primary">
        <a class="navbar-brand" [routerLink]="['/']">BM App</a>
      </nav>
    </header>

    <section>
      <main class="container">
        <router-outlet></router-outlet>
      </main>
    </section>

    <footer>
      <a href="https://cfgsolucoes.com">cfgsolucoes.com</a>
    </footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
