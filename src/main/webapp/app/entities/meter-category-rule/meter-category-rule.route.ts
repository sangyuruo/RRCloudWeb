import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { MeterCategoryRuleComponent } from './meter-category-rule.component';
import { MeterCategoryRuleDetailComponent } from './meter-category-rule-detail.component';
import { MeterCategoryRulePopupComponent } from './meter-category-rule-dialog.component';
import { MeterCategoryRuleDeletePopupComponent } from './meter-category-rule-delete-dialog.component';

@Injectable()
export class MeterCategoryRuleResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const meterCategoryRuleRoute: Routes = [
    {
        path: 'meter-category-rule',
        component: MeterCategoryRuleComponent,
        resolve: {
            'pagingParams': MeterCategoryRuleResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryRule.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'meter-category-rule/:id',
        component: MeterCategoryRuleDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryRule.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const meterCategoryRulePopupRoute: Routes = [
    {
        path: 'meter-category-rule-new',
        component: MeterCategoryRulePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryRule.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-category-rule/:id/edit',
        component: MeterCategoryRulePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryRule.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-category-rule/:id/delete',
        component: MeterCategoryRuleDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryRule.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
