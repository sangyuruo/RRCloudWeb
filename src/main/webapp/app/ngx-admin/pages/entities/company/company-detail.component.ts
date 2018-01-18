import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import {JhiEventManager, JhiLanguageService} from 'ng-jhipster';

import { Company } from './company.model';
import { CompanyService } from './company.service';

@Component({
    selector: 'jhi-company-detail',
    templateUrl: './company-detail.component.html'
})
export class CompanyDetailComponent implements OnInit, OnDestroy {

    company: Company;
    private subscription: Subscription;
    private eventSubscriber: Subscription;
    //增加变量
    companyAccount: any;
    constructor(
        private eventManager: JhiEventManager,
        private companyService: CompanyService,
        private route: ActivatedRoute,
        private languageService: JhiLanguageService,
    ) {
    }


    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCompanies();
    }

    load(id) {
        this.companyService.find(id).subscribe((company) => {
            this.company = company;
        });
        this.languageService.getCurrent().then((current) => {
            if (this.companyAccount.langKey !== current) {
                this.languageService.changeLanguage(this.companyAccount.langKey);
            }
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCompanies() {
        this.eventSubscriber = this.eventManager.subscribe(
            'companyListModification',
            (response) => this.load(this.company.id)
        );
    }
}
