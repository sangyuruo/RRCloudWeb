import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Dictionaryclassify } from './dictionaryclassify.model';
import { DictionaryclassifyPopupService } from './dictionaryclassify-popup.service';
import { DictionaryclassifyService } from './dictionaryclassify.service';
import { Dictionary, DictionaryService } from '../dictionary';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-dictionaryclassify-dialog',
    templateUrl: './dictionaryclassify-dialog.component.html'
})
export class DictionaryclassifyDialogComponent implements OnInit {

    dictionaryclassify: Dictionaryclassify;
    isSaving: boolean;

    dictionaries: Dictionary[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private dictionaryclassifyService: DictionaryclassifyService,
        private dictionaryService: DictionaryService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.dictionaryService.query()
            .subscribe((res: ResponseWrapper) => { this.dictionaries = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.dictionaryclassify.id !== undefined) {
            this.subscribeToSaveResponse(
                this.dictionaryclassifyService.update(this.dictionaryclassify));
        } else {
            this.subscribeToSaveResponse(
                this.dictionaryclassifyService.create(this.dictionaryclassify));
        }
    }

    private subscribeToSaveResponse(result: Observable<Dictionaryclassify>) {
        result.subscribe((res: Dictionaryclassify) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Dictionaryclassify) {
        this.eventManager.broadcast({ name: 'dictionaryclassifyListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackDictionaryById(index: number, item: Dictionary) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-dictionaryclassify-popup',
    template: ''
})
export class DictionaryclassifyPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private dictionaryclassifyPopupService: DictionaryclassifyPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.dictionaryclassifyPopupService
                    .open(DictionaryclassifyDialogComponent as Component, params['id']);
            } else {
                this.dictionaryclassifyPopupService
                    .open(DictionaryclassifyDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
