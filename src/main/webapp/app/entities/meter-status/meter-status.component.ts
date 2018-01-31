import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { MeterStatus } from './meter-status.model';
import { MeterStatusService } from './meter-status.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-meter-status',
    templateUrl: './meter-status.component.html'
})
export class MeterStatusComponent implements OnInit, OnDestroy {
meterStatuses: MeterStatus[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private meterStatusService: MeterStatusService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.meterStatusService.query().subscribe(
            (res: ResponseWrapper) => {
                this.meterStatuses = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInMeterStatuses();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: MeterStatus) {
        return item.id;
    }
    registerChangeInMeterStatuses() {
        this.eventSubscriber = this.eventManager.subscribe('meterStatusListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
