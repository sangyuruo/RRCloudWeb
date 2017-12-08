import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { MultiwaySwitch } from './multiway-switch.model';
import { MultiwaySwitchService } from './multiway-switch.service';

@Injectable()
export class MultiwaySwitchPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private multiwaySwitchService: MultiwaySwitchService

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
                this.multiwaySwitchService.find(id).subscribe((multiwaySwitch) => {
                    multiwaySwitch.recordTime = this.datePipe
                        .transform(multiwaySwitch.recordTime, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.multiwaySwitchModalRef(component, multiwaySwitch);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.multiwaySwitchModalRef(component, new MultiwaySwitch());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    multiwaySwitchModalRef(component: Component, multiwaySwitch: MultiwaySwitch): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.multiwaySwitch = multiwaySwitch;
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
