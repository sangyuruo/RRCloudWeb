import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MultiwaySwitch } from './multiway-switch.model';
import { MultiwaySwitchPopupService } from './multiway-switch-popup.service';
import { MultiwaySwitchService } from './multiway-switch.service';

@Component({
    selector: 'jhi-multiway-switch-dialog',
    templateUrl: './multiway-switch-dialog.component.html'
})
export class MultiwaySwitchDialogComponent implements OnInit {

    multiwaySwitch: MultiwaySwitch;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private multiwaySwitchService: MultiwaySwitchService,
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
        if (this.multiwaySwitch.id !== undefined) {
            this.subscribeToSaveResponse(
                this.multiwaySwitchService.update(this.multiwaySwitch));
        } else {
            this.subscribeToSaveResponse(
                this.multiwaySwitchService.create(this.multiwaySwitch));
        }
    }

    private subscribeToSaveResponse(result: Observable<MultiwaySwitch>) {
        result.subscribe((res: MultiwaySwitch) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MultiwaySwitch) {
        this.eventManager.broadcast({ name: 'multiwaySwitchListModification', content: 'OK'});
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
    selector: 'jhi-multiway-switch-popup',
    template: ''
})
export class MultiwaySwitchPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private multiwaySwitchPopupService: MultiwaySwitchPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.multiwaySwitchPopupService
                    .open(MultiwaySwitchDialogComponent as Component, params['id']);
            } else {
                this.multiwaySwitchPopupService
                    .open(MultiwaySwitchDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
