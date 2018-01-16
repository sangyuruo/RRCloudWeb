import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MeterStatus } from './meter-status.model';
import { MeterStatusPopupService } from './meter-status-popup.service';
import { MeterStatusService } from './meter-status.service';

@Component({
    selector: 'jhi-meter-status-delete-dialog',
    templateUrl: './meter-status-delete-dialog.component.html'
})
export class MeterStatusDeleteDialogComponent {

    meterStatus: MeterStatus;

    constructor(
        private meterStatusService: MeterStatusService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.meterStatusService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'meterStatusListModification',
                content: 'Deleted an meterStatus'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-meter-status-delete-popup',
    template: ''
})
export class MeterStatusDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private meterStatusPopupService: MeterStatusPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.meterStatusPopupService
                .open(MeterStatusDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
