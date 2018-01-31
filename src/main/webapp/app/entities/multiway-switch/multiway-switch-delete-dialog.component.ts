import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MultiwaySwitch } from './multiway-switch.model';
import { MultiwaySwitchPopupService } from './multiway-switch-popup.service';
import { MultiwaySwitchService } from './multiway-switch.service';

@Component({
    selector: 'jhi-multiway-switch-delete-dialog',
    templateUrl: './multiway-switch-delete-dialog.component.html'
})
export class MultiwaySwitchDeleteDialogComponent {

    multiwaySwitch: MultiwaySwitch;

    constructor(
        private multiwaySwitchService: MultiwaySwitchService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.multiwaySwitchService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'multiwaySwitchListModification',
                content: 'Deleted an multiwaySwitch'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-multiway-switch-delete-popup',
    template: ''
})
export class MultiwaySwitchDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private multiwaySwitchPopupService: MultiwaySwitchPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.multiwaySwitchPopupService
                .open(MultiwaySwitchDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
