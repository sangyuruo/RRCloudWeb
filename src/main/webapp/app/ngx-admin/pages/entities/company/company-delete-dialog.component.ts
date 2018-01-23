import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Company } from './company.model';
import { CompanyPopupService } from './company-popup.service';
import { CompanyService } from './company.service';

@Component({
    selector: 'jhi-company-delete-dialog',
    templateUrl: './company-delete-dialog.component.html'
})
export class CompanyDeleteDialogComponent {

    company: Company;

    constructor(
        private companyService: CompanyService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager,
        //强行跳转
        private router:Router
    ) {
    }

    clear() {
        //强行跳转
        this.router.navigate(['pages/company']);
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.companyService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'companyListModification',
                content: 'Deleted a company'
            });
                    //强行跳转
            this.router.navigate(['pages/company']);
            this.activeModal.dismiss(true);
        });
    }
    save(company : Company){

        this.companyService.create(company).subscribe((response) =>{
            this.eventManager.broadcast({
                name:'company',
                content:'Save a company'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-company-delete-popup',
    template: ''
})
export class CompanyDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private companyPopupService: CompanyPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.companyPopupService
                .open(CompanyDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
