import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { AnalysisEngine } from './analysis-engine.model';
import { AnalysisEnginePopupService } from './analysis-engine-popup.service';
import { AnalysisEngineService } from './analysis-engine.service';
import { MeterCategoryRule, MeterCategoryRuleService } from '../meter-category-rule';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-analysis-engine-dialog',
    templateUrl: './analysis-engine-dialog.component.html'
})
export class AnalysisEngineDialogComponent implements OnInit {

    analysisEngine: AnalysisEngine;
    isSaving: boolean;

    metercategoryrules: MeterCategoryRule[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private analysisEngineService: AnalysisEngineService,
        private meterCategoryRuleService: MeterCategoryRuleService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.meterCategoryRuleService.query()
            .subscribe((res: ResponseWrapper) => { this.metercategoryrules = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.analysisEngine.id !== undefined) {
            this.subscribeToSaveResponse(
                this.analysisEngineService.update(this.analysisEngine));
        } else {
            this.subscribeToSaveResponse(
                this.analysisEngineService.create(this.analysisEngine));
        }
    }

    private subscribeToSaveResponse(result: Observable<AnalysisEngine>) {
        result.subscribe((res: AnalysisEngine) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: AnalysisEngine) {
        this.eventManager.broadcast({ name: 'analysisEngineListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackMeterCategoryRuleById(index: number, item: MeterCategoryRule) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-analysis-engine-popup',
    template: ''
})
export class AnalysisEnginePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private analysisEnginePopupService: AnalysisEnginePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.analysisEnginePopupService
                    .open(AnalysisEngineDialogComponent as Component, params['id']);
            } else {
                this.analysisEnginePopupService
                    .open(AnalysisEngineDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
