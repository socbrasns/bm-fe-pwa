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
      <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
        <div class="font-bold mr-8">🔥 Hot Deals!</div>
        <div class="align-items-center hidden lg:flex">
            <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
        </div>
        <a class="flex align-items-center ml-2 mr-8">
            <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
        </a>
        <a pRipple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style="width:2rem; height: 2rem">
            <i class="pi pi-times"></i>
        </a>
    </div>
    </div>

  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
