import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { MultiwaySwitch } from './multiway-switch.model';
import { MultiwaySwitchService } from './multiway-switch.service';

@Component({
    selector: 'jhi-multiway-switch-detail',
    templateUrl: './multiway-switch-detail.component.html'
})
export class MultiwaySwitchDetailComponent implements OnInit, OnDestroy {

    multiwaySwitch: MultiwaySwitch;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private multiwaySwitchService: MultiwaySwitchService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMultiwaySwitches();
    }

    load(id) {
        this.multiwaySwitchService.find(id).subscribe((multiwaySwitch) => {
            this.multiwaySwitch = multiwaySwitch;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMultiwaySwitches() {
        this.eventSubscriber = this.eventManager.subscribe(
            'multiwaySwitchListModification',
            (response) => this.load(this.multiwaySwitch.id)
        );
    }
}
