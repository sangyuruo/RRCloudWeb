import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MeterCategoryRule } from './meter-category-rule.model';
import { MeterCategoryRulePopupService } from './meter-category-rule-popup.service';
import { MeterCategoryRuleService } from './meter-category-rule.service';

@Component({
    selector: 'jhi-meter-category-rule-delete-dialog',
    templateUrl: './meter-category-rule-delete-dialog.component.html'
})
export class MeterCategoryRuleDeleteDialogComponent {

    meterCategoryRule: MeterCategoryRule;

    constructor(
        private meterCategoryRuleService: MeterCategoryRuleService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.meterCategoryRuleService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'meterCategoryRuleListModification',
                content: 'Deleted an meterCategoryRule'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-meter-category-rule-delete-popup',
    template: ''
})
export class MeterCategoryRuleDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private meterCategoryRulePopupService: MeterCategoryRulePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.meterCategoryRulePopupService
                .open(MeterCategoryRuleDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
