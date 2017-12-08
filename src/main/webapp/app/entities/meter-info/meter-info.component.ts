import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { MeterInfo } from './meter-info.model';
import { MeterInfoService } from './meter-info.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-meter-info',
    templateUrl: './meter-info.component.html'
})
export class MeterInfoComponent implements OnInit, OnDestroy {
meterInfos: MeterInfo[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private meterInfoService: MeterInfoService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.meterInfoService.query().subscribe(
            (res: ResponseWrapper) => {
                this.meterInfos = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInMeterInfos();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: MeterInfo) {
        return item.id;
    }
    registerChangeInMeterInfos() {
        this.eventSubscriber = this.eventManager.subscribe('meterInfoListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
