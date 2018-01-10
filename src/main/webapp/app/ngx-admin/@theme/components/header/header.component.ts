import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalService} from "../../../../shared/login/login-modal.service";
import {LoginService} from "../../../../shared/login/login.service";


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    //添加登录弹出窗口
    modalRef: NgbModalRef;


  @Input() position = 'normal';

  user: any;

  userMenu = [
      { title: '登录', link: '/auth/login'},
      { title: '注册', link: '/auth/register' },

      { title: '设置',link: '/auth/setting' },
      { title: '密码',link: '/auth/reset' },
      { title: '退出' }
  ];

constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,

            //添加登录弹出窗口
            private loginModalService: LoginModalService,
            private loginService: LoginService,

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

  //添加登录弹出窗口
    /*openLogin() {
        this.modalRef = this.loginModalService.open();
    }*/

    logout() {
        this.loginService.logout();
    }


}



