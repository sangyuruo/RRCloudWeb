import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Dictionaryclassify } from './dictionaryclassify.model';
import { DictionaryclassifyPopupService } from './dictionaryclassify-popup.service';
import { DictionaryclassifyService } from './dictionaryclassify.service';

@Component({
    selector: 'jhi-dictionaryclassify-delete-dialog',
    templateUrl: './dictionaryclassify-delete-dialog.component.html'
})
export class DictionaryclassifyDeleteDialogComponent {

    dictionaryclassify: Dictionaryclassify;

    constructor(
        private dictionaryclassifyService: DictionaryclassifyService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.dictionaryclassifyService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'dictionaryclassifyListModification',
                content: 'Deleted an dictionaryclassify'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-dictionaryclassify-delete-popup',
    template: ''
})
export class DictionaryclassifyDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private dictionaryclassifyPopupService: DictionaryclassifyPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.dictionaryclassifyPopupService
                .open(DictionaryclassifyDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
