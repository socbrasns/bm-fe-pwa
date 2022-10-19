import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar-home',
  template: `
    <p-menubar [model]="items">
      <!--<input type="text" pInputText placeholder="Search">-->
      <span><i class="pi pi-wifi" style="font-size: 2rem; color: red"></i></span>
      
      <button pButton label="Sing Out" icon="pi pi-power-off" (click)="singOut()"></button>
    </p-menubar>
  `,
  styleUrls: ['./menu-bar-home.component.scss']
})
export class MenuBarHomeComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private router: Router){}

  singOut(): void{
    window.localStorage.removeItem('token')
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Operation',
        icon: 'pi pi-fw pi-wrench',
        routerLink: [''],
      },
      {
        label: 'Administration',
        icon: 'pi pi-fw pi-home',
        items: [
            {label: 'Users', icon: 'pi pi-fw pi-users'},
            {label: 'Events', icon: 'pi pi-fw pi-home'},
            {label: 'Forms', icon: 'pi pi-fw pi-file'},
        ]
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {label: 'By User', icon: 'pi pi-fw pi-user'},
          {label: 'By Event', icon: 'pi pi-fw pi-home'},
        ],
      }
  ];
  }

}
