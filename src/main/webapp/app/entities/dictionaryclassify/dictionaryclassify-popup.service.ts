import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Dictionaryclassify } from './dictionaryclassify.model';
import { DictionaryclassifyService } from './dictionaryclassify.service';

@Injectable()
export class DictionaryclassifyPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private dictionaryclassifyService: DictionaryclassifyService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.dictionaryclassifyService.find(id).subscribe((dictionaryclassify) => {
                    this.ngbModalRef = this.dictionaryclassifyModalRef(component, dictionaryclassify);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.dictionaryclassifyModalRef(component, new Dictionaryclassify());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    dictionaryclassifyModalRef(component: Component, dictionaryclassify: Dictionaryclassify): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.dictionaryclassify = dictionaryclassify;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
