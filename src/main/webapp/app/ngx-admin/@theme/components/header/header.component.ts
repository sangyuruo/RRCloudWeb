import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {NbAuthService} from "../../../@nebular/auth/services/auth.service";
import {NbAuthJWTToken} from "../../../@nebular/auth/services/token.service";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {



  @Input() position = 'normal';

  user: any;

  userMenu = [
      { title: '登录', link: '/login' },
      { title: '注册', link: '/register' },

      { title: '设置',link: '/setting' },
      { title: '密码',link: '/reset' },
      { title: '退出',link: '/logout' }
  ];

constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,

              //添加
              private authService: NbAuthService,
  ) {

      //添加
      this.authService.onTokenChange()
          .subscribe((token: NbAuthJWTToken) => {

              if (token.getValue()) {
                  this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
              }

          });
  }



  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
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


}



