import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-menu-bar-home></app-menu-bar-home>

    <div class="home">
      <section>
        <main class="container">
          <router-outlet></router-outlet>
        </main>
      </section>
    </div>
    <div class="footer">
      <footer>
        <a href="https://cfgsolucoes.com">cfgsolucoes.com</a>
      </footer>
    </div>

  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
