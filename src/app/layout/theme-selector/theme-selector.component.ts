import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme/theme.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-theme-selector',
  template: `
<div class="flex align-items-center">

<p-dropdown [options]="themes" [(ngModel)]="selectedTheme" (ngModelChange)="changeTheme()"></p-dropdown>
    </div>
  `,
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

themes: string[] = environment.themes
selectedTheme: string = environment.themeDefault

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.switchTheme(this.selectedTheme)
  }

  changeTheme() {
    this.themeService.switchTheme(this.selectedTheme)
  }

}
