import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {LoginService} from "../../../../shared/login/login.service";
import {Router} from "@angular/router";
//import { AccountService } from '../../../../shared/auth/account.service';
import { Principal } from '../../../../shared/auth/principal.service';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [
      { title: '设置',link: '/setting' },
      { title: '密码',link: '/password' },
      { title: '退出' }
  ];

constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private principal: Principal,
            //  private account : AccountService,
              private analyticsService: AnalyticsService,

            //jhipster注销功能
            private loginService: LoginService,
            private router: Router,
            ) {

  }



  ngOnInit() {


      //这种方式取用户信息不用发送请求
      this.principal.identity().then((account) => {
          this.user = account;
      });
      //这种方式会发送请求
      // return this.account.get().toPromise().then((account) => {
      //     this.user=account;
      // }).catch((err) => {
      //     return null;
      // });
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

    //jhipster注销功能
    logout() {
        this.loginService.logout();
        this.router.navigate(['']);
    }




}



