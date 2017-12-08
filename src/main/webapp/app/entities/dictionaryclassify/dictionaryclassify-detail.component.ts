import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Dictionaryclassify } from './dictionaryclassify.model';
import { DictionaryclassifyService } from './dictionaryclassify.service';

@Component({
    selector: 'jhi-dictionaryclassify-detail',
    templateUrl: './dictionaryclassify-detail.component.html'
})
export class DictionaryclassifyDetailComponent implements OnInit, OnDestroy {

    dictionaryclassify: Dictionaryclassify;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private dictionaryclassifyService: DictionaryclassifyService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInDictionaryclassifies();
    }

    load(id) {
        this.dictionaryclassifyService.find(id).subscribe((dictionaryclassify) => {
            this.dictionaryclassify = dictionaryclassify;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInDictionaryclassifies() {
        this.eventSubscriber = this.eventManager.subscribe(
            'dictionaryclassifyListModification',
            (response) => this.load(this.dictionaryclassify.id)
        );
    }
}
