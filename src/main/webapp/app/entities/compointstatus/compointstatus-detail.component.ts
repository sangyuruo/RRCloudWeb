import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Compointstatus } from './compointstatus.model';
import { CompointstatusService } from './compointstatus.service';

@Component({
    selector: 'jhi-compointstatus-detail',
    templateUrl: './compointstatus-detail.component.html'
})
export class CompointstatusDetailComponent implements OnInit, OnDestroy {

    compointstatus: Compointstatus;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private compointstatusService: CompointstatusService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCompointstatuses();
    }

    load(id) {
        this.compointstatusService.find(id).subscribe((compointstatus) => {
            this.compointstatus = compointstatus;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCompointstatuses() {
        this.eventSubscriber = this.eventManager.subscribe(
            'compointstatusListModification',
            (response) => this.load(this.compointstatus.id)
        );
    }
}
