import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Compointstatus } from './compointstatus.model';
import { CompointstatusPopupService } from './compointstatus-popup.service';
import { CompointstatusService } from './compointstatus.service';

@Component({
    selector: 'jhi-compointstatus-delete-dialog',
    templateUrl: './compointstatus-delete-dialog.component.html'
})
export class CompointstatusDeleteDialogComponent {

    compointstatus: Compointstatus;

    constructor(
        private compointstatusService: CompointstatusService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.compointstatusService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'compointstatusListModification',
                content: 'Deleted an compointstatus'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-compointstatus-delete-popup',
    template: ''
})
export class CompointstatusDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private compointstatusPopupService: CompointstatusPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.compointstatusPopupService
                .open(CompointstatusDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
