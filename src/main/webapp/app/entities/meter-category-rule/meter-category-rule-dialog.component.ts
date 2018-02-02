import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MeterCategoryRule } from './meter-category-rule.model';
import { MeterCategoryRulePopupService } from './meter-category-rule-popup.service';
import { MeterCategoryRuleService } from './meter-category-rule.service';

@Component({
    selector: 'jhi-meter-category-rule-dialog',
    templateUrl: './meter-category-rule-dialog.component.html'
})
export class MeterCategoryRuleDialogComponent implements OnInit {

    meterCategoryRule: MeterCategoryRule;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private meterCategoryRuleService: MeterCategoryRuleService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.meterCategoryRule.id !== undefined) {
            this.subscribeToSaveResponse(
                this.meterCategoryRuleService.update(this.meterCategoryRule));
        } else {
            this.subscribeToSaveResponse(
                this.meterCategoryRuleService.create(this.meterCategoryRule));
        }
    }

    private subscribeToSaveResponse(result: Observable<MeterCategoryRule>) {
        result.subscribe((res: MeterCategoryRule) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MeterCategoryRule) {
        this.eventManager.broadcast({ name: 'meterCategoryRuleListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-meter-category-rule-popup',
    template: ''
})
export class MeterCategoryRulePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private meterCategoryRulePopupService: MeterCategoryRulePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.meterCategoryRulePopupService
                    .open(MeterCategoryRuleDialogComponent as Component, params['id']);
            } else {
                this.meterCategoryRulePopupService
                    .open(MeterCategoryRuleDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
