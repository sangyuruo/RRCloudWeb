import { Component, Input, OnInit } from '@angular/core';

import { NbSidebarService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalService} from "../../../../shared/login/login-modal.service";



@Component({
    selector: 'ngx-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    //添加登录弹出窗口
    modalRef: NgbModalRef;


    @Input() position = 'normal';

    user: any;

    userMenu = [
        { title: '登录'},
        { title: '注册' ,link: '/register' }
    ];

    constructor(private sidebarService: NbSidebarService,
                private userService: UserService,

                //添加登录弹出窗口
                private loginModalService: LoginModalService,

    ) {

    }


    ngOnInit() {
        this.userService.getUsers()
            .subscribe((users: any) => this.user = users.nick);
    }



    //添加登录弹出窗口
    openLogin() {
        this.modalRef = this.loginModalService.open();
    }


}



