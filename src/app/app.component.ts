import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/service/auth/auth.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bm-fe-pwa';
  authenticatedUser!: User;
  
  constructor(private primengConfig: PrimeNGConfig,
    private authService: AuthService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.authService.authUserEmitter.subscribe(this.authEventHolder)
    }

    authEventHolder(user: User){
      this.authenticatedUser = user
      console.log(this.authenticatedUser)
    }
}
