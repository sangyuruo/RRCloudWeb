import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { AnalysisEngine } from './analysis-engine.model';
import { AnalysisEnginePopupService } from './analysis-engine-popup.service';
import { AnalysisEngineService } from './analysis-engine.service';

@Component({
    selector: 'jhi-analysis-engine-delete-dialog',
    templateUrl: './analysis-engine-delete-dialog.component.html'
})
export class AnalysisEngineDeleteDialogComponent {

    analysisEngine: AnalysisEngine;

    constructor(
        private analysisEngineService: AnalysisEngineService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.analysisEngineService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'analysisEngineListModification',
                content: 'Deleted an analysisEngine'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-analysis-engine-delete-popup',
    template: ''
})
export class AnalysisEngineDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private analysisEnginePopupService: AnalysisEnginePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.analysisEnginePopupService
                .open(AnalysisEngineDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
