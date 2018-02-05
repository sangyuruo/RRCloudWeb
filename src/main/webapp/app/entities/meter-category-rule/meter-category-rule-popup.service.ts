import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { MeterCategoryRule } from './meter-category-rule.model';
import { MeterCategoryRuleService } from './meter-category-rule.service';

@Injectable()
export class MeterCategoryRulePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private meterCategoryRuleService: MeterCategoryRuleService

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
                this.meterCategoryRuleService.find(id).subscribe((meterCategoryRule) => {
                    meterCategoryRule.createTime = this.datePipe
                        .transform(meterCategoryRule.createTime, 'yyyy-MM-ddTHH:mm:ss');
                    meterCategoryRule.updateTime = this.datePipe
                        .transform(meterCategoryRule.updateTime, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.meterCategoryRuleModalRef(component, meterCategoryRule);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.meterCategoryRuleModalRef(component, new MeterCategoryRule());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    meterCategoryRuleModalRef(component: Component, meterCategoryRule: MeterCategoryRule): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.meterCategoryRule = meterCategoryRule;
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
