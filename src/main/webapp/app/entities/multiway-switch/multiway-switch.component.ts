import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { MultiwaySwitch } from './multiway-switch.model';
import { MultiwaySwitchService } from './multiway-switch.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-multiway-switch',
    templateUrl: './multiway-switch.component.html'
})
export class MultiwaySwitchComponent implements OnInit, OnDestroy {
multiwaySwitches: MultiwaySwitch[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private multiwaySwitchService: MultiwaySwitchService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.multiwaySwitchService.query().subscribe(
            (res: ResponseWrapper) => {
                this.multiwaySwitches = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInMultiwaySwitches();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: MultiwaySwitch) {
        return item.id;
    }
    registerChangeInMultiwaySwitches() {
        this.eventSubscriber = this.eventManager.subscribe('multiwaySwitchListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
