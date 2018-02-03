import {Component, OnInit, OnDestroy, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager, JhiLanguageService} from 'ng-jhipster';

import { UserModalService } from './user-modal.service';
import {User} from "../../../../shared/user/user.model";
import {JhiLanguageHelper} from "../../../../shared/language/language.helper";
import {UserService} from "../../../../shared/user/user.service";

@Component({
    selector: 'jhi-user-mgmt-dialog',
    templateUrl: './user-management-dialog.component.html'
})
export class UserMgmtDialogComponent implements OnInit,AfterContentChecked{

    user: User;
    languages: any[];
    authorities: any[];
    auth: any[];
    isSaving: Boolean;



    constructor(
        public activeModal: NgbActiveModal,
        private languageHelper: JhiLanguageHelper,
        private userService: UserService,
        private eventManager: JhiEventManager,

        //添加国际化
        private languageService: JhiLanguageService,
        private router: Router,

        private cdref: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.authorities = [];
        this.auth = [];

        this.userService.authorities().subscribe((authorities) => {
            this.authorities = authorities;
        });
        this.auth = [];


        this.languageHelper.getAll().then((languages) => {
            this.languages = languages;
        });



    }


    ngAfterContentChecked() {

        this.cdref.detectChanges();

    }

    clear() {
        //强行跳转
        this.router.navigateByUrl('/pages/user-management');
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            this.userService.create(this.user).subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
        }
    }

    private onSaveSuccess(result) {
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        //强行跳转
        this.router.navigateByUrl('/pages/user-management');
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-user-dialog',
    template: ''
})
export class UserDialogComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private userModalService: UserModalService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['login'] ) {
                this.modalRef = this.userModalService.open(UserMgmtDialogComponent as Component, params['login']);
            } else {
                this.modalRef = this.userModalService.open(UserMgmtDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
