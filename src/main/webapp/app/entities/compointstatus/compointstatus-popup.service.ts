import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Compointstatus } from './compointstatus.model';
import { CompointstatusService } from './compointstatus.service';

@Injectable()
export class CompointstatusPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private compointstatusService: CompointstatusService

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
                this.compointstatusService.find(id).subscribe((compointstatus) => {
                    compointstatus.recordTime = this.datePipe
                        .transform(compointstatus.recordTime, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.compointstatusModalRef(component, compointstatus);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.compointstatusModalRef(component, new Compointstatus());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    compointstatusModalRef(component: Component, compointstatus: Compointstatus): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.compointstatus = compointstatus;
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
