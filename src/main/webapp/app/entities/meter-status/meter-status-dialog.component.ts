import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MeterStatus } from './meter-status.model';
import { MeterStatusPopupService } from './meter-status-popup.service';
import { MeterStatusService } from './meter-status.service';

@Component({
    selector: 'jhi-meter-status-dialog',
    templateUrl: './meter-status-dialog.component.html'
})
export class MeterStatusDialogComponent implements OnInit {

    meterStatus: MeterStatus;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private meterStatusService: MeterStatusService,
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
        if (this.meterStatus.id !== undefined) {
            this.subscribeToSaveResponse(
                this.meterStatusService.update(this.meterStatus));
        } else {
            this.subscribeToSaveResponse(
                this.meterStatusService.create(this.meterStatus));
        }
    }

    private subscribeToSaveResponse(result: Observable<MeterStatus>) {
        result.subscribe((res: MeterStatus) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MeterStatus) {
        this.eventManager.broadcast({ name: 'meterStatusListModification', content: 'OK'});
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
    selector: 'jhi-meter-status-popup',
    template: ''
})
export class MeterStatusPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private meterStatusPopupService: MeterStatusPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.meterStatusPopupService
                    .open(MeterStatusDialogComponent as Component, params['id']);
            } else {
                this.meterStatusPopupService
                    .open(MeterStatusDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
