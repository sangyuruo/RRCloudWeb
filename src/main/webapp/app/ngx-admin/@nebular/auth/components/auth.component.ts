/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnDestroy } from '@angular/core';
import { NbAuthService } from '../services/auth.service';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalService} from "../../../../shared/login/login-modal.service";

@Component({
  selector: 'nb-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
            <nb-card-header>华翔翔能能效管理平台 
            
               <button class='btn btn-warning'(click)="openLogin()">点击</button>
            </nb-card-header>
          <nb-card-body>
            <div class="col-md-12 col-sm-14">
              <router-outlet></router-outlet>
            </div>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NbAuthComponent implements OnDestroy {

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

    //添加登录弹出窗口
    modalRef: NgbModalRef;

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NbAuthService,
              private loginModalService: LoginModalService,) {

    this.subscription = auth.onAuthenticationChange()
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    //添加登录弹出窗口
    openLogin() {
        this.modalRef = this.loginModalService.open();
    }
}
