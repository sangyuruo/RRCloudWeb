import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {



  @Input() position = 'normal';

  user: any;

  userMenu = [
      { title: '登录', link: '/auth/login' },
      { title: '注册', link: '/auth/register' },

      { title: '设置',link: '/auth/setting' },
      { title: '密码',link: '/auth/reset' },
      { title: '退出',link: '/auth/logout' }
  ];

constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
  ) {

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



