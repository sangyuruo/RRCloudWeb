import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AnalysisEngine } from './analysis-engine.model';
import { AnalysisEngineService } from './analysis-engine.service';

@Injectable()
export class AnalysisEnginePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private analysisEngineService: AnalysisEngineService

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
                this.analysisEngineService.find(id).subscribe((analysisEngine) => {
                    analysisEngine.createTime = this.datePipe
                        .transform(analysisEngine.createTime, 'yyyy-MM-ddTHH:mm:ss');
                    analysisEngine.updateTime = this.datePipe
                        .transform(analysisEngine.updateTime, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.analysisEngineModalRef(component, analysisEngine);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.analysisEngineModalRef(component, new AnalysisEngine());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    analysisEngineModalRef(component: Component, analysisEngine: AnalysisEngine): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.analysisEngine = analysisEngine;
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
