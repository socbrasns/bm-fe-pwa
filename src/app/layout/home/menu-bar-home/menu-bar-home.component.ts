import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar-home',
  template: `
      <div class="menu">
          <section>
              <mat-toolbar>
                <button mat-icon-button aria-label="Example icon-button with menu icon">
                  <mat-icon>menu</mat-icon>
                </button>
                <span>My App</span>
                <span class="toolbar-spacer"></span>
                <button mat-icon-button class="favorite-icon" aria-label="Example icon-button with heart icon">
                  <mat-icon>favorite</mat-icon>
                </button>
                <button mat-icon-button aria-label="Example icon-button with share icon">
                  <mat-icon>share</mat-icon>
                </button>
              </mat-toolbar>
          </section>
      </div>
  `,
  styleUrls: ['./menu-bar-home.component.scss']
})
export class MenuBarHomeComponent implements OnInit {

  //items: MenuItem[] = [];

  constructor(private router: Router){}

  singOut(): void{
    window.localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
//    this.items = [
//      {
//        label: 'Operation',
//        icon: 'pi pi-fw pi-wrench',
//        routerLink: [''],
//      },
//      {
//        label: 'Administration',
//       icon: 'pi pi-fw pi-home',
//        items: [
//            {label: 'Users', icon: 'pi pi-fw pi-users'},
//            {label: 'Events', icon: 'pi pi-fw pi-home'},
//            {label: 'Forms', icon: 'pi pi-fw pi-file'},
//        ]
//      },
//      {
//        label: 'Reports',
//        icon: 'pi pi-fw pi-desktop',
//       items: [
//          {label: 'By User', icon: 'pi pi-fw pi-user'},
//          {label: 'By Event', icon: 'pi pi-fw pi-home'},
//        ],
//      }
//  ];
  }

}
