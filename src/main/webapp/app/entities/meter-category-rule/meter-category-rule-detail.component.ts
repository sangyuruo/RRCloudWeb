import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { MeterCategoryRule } from './meter-category-rule.model';
import { MeterCategoryRuleService } from './meter-category-rule.service';

@Component({
    selector: 'jhi-meter-category-rule-detail',
    templateUrl: './meter-category-rule-detail.component.html'
})
export class MeterCategoryRuleDetailComponent implements OnInit, OnDestroy {

    meterCategoryRule: MeterCategoryRule;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private meterCategoryRuleService: MeterCategoryRuleService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMeterCategoryRules();
    }

    load(id) {
        this.meterCategoryRuleService.find(id).subscribe((meterCategoryRule) => {
            this.meterCategoryRule = meterCategoryRule;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMeterCategoryRules() {
        this.eventSubscriber = this.eventManager.subscribe(
            'meterCategoryRuleListModification',
            (response) => this.load(this.meterCategoryRule.id)
        );
    }
}
