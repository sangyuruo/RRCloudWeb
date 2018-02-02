import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { AnalysisEngine } from './analysis-engine.model';
import { AnalysisEngineService } from './analysis-engine.service';

@Component({
    selector: 'jhi-analysis-engine-detail',
    templateUrl: './analysis-engine-detail.component.html'
})
export class AnalysisEngineDetailComponent implements OnInit, OnDestroy {

    analysisEngine: AnalysisEngine;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private analysisEngineService: AnalysisEngineService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInAnalysisEngines();
    }

    load(id) {
        this.analysisEngineService.find(id).subscribe((analysisEngine) => {
            this.analysisEngine = analysisEngine;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInAnalysisEngines() {
        this.eventSubscriber = this.eventManager.subscribe(
            'analysisEngineListModification',
            (response) => this.load(this.analysisEngine.id)
        );
    }
}
