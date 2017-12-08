import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { MeterCategoryInfo } from './meter-category-info.model';
import { MeterCategoryInfoService } from './meter-category-info.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-meter-category-info',
    templateUrl: './meter-category-info.component.html'
})
export class MeterCategoryInfoComponent implements OnInit, OnDestroy {
meterCategoryInfos: MeterCategoryInfo[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private meterCategoryInfoService: MeterCategoryInfoService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.meterCategoryInfoService.query().subscribe(
            (res: ResponseWrapper) => {
                this.meterCategoryInfos = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInMeterCategoryInfos();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: MeterCategoryInfo) {
        return item.id;
    }
    registerChangeInMeterCategoryInfos() {
        this.eventSubscriber = this.eventManager.subscribe('meterCategoryInfoListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
