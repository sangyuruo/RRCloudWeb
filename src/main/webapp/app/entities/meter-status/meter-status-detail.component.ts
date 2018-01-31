import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { MeterStatus } from './meter-status.model';
import { MeterStatusService } from './meter-status.service';

@Component({
    selector: 'jhi-meter-status-detail',
    templateUrl: './meter-status-detail.component.html'
})
export class MeterStatusDetailComponent implements OnInit, OnDestroy {

    meterStatus: MeterStatus;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private meterStatusService: MeterStatusService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMeterStatuses();
    }

    load(id) {
        this.meterStatusService.find(id).subscribe((meterStatus) => {
            this.meterStatus = meterStatus;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMeterStatuses() {
        this.eventSubscriber = this.eventManager.subscribe(
            'meterStatusListModification',
            (response) => this.load(this.meterStatus.id)
        );
    }
}
