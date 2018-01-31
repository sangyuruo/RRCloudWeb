import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Compointstatus } from './compointstatus.model';
import { CompointstatusPopupService } from './compointstatus-popup.service';
import { CompointstatusService } from './compointstatus.service';

@Component({
    selector: 'jhi-compointstatus-dialog',
    templateUrl: './compointstatus-dialog.component.html'
})
export class CompointstatusDialogComponent implements OnInit {

    compointstatus: Compointstatus;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private compointstatusService: CompointstatusService,
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
        if (this.compointstatus.id !== undefined) {
            this.subscribeToSaveResponse(
                this.compointstatusService.update(this.compointstatus));
        } else {
            this.subscribeToSaveResponse(
                this.compointstatusService.create(this.compointstatus));
        }
    }

    private subscribeToSaveResponse(result: Observable<Compointstatus>) {
        result.subscribe((res: Compointstatus) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Compointstatus) {
        this.eventManager.broadcast({ name: 'compointstatusListModification', content: 'OK'});
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
    selector: 'jhi-compointstatus-popup',
    template: ''
})
export class CompointstatusPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private compointstatusPopupService: CompointstatusPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.compointstatusPopupService
                    .open(CompointstatusDialogComponent as Component, params['id']);
            } else {
                this.compointstatusPopupService
                    .open(CompointstatusDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
