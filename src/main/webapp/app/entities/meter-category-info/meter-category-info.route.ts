import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { MeterCategoryInfoComponent } from './meter-category-info.component';
import { MeterCategoryInfoDetailComponent } from './meter-category-info-detail.component';
import { MeterCategoryInfoPopupComponent } from './meter-category-info-dialog.component';
import { MeterCategoryInfoDeletePopupComponent } from './meter-category-info-delete-dialog.component';

export const meterCategoryInfoRoute: Routes = [
    {
        path: 'meter-category-info',
        component: MeterCategoryInfoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryInfo.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'meter-category-info/:id',
        component: MeterCategoryInfoDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryInfo.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const meterCategoryInfoPopupRoute: Routes = [
    {
        path: 'meter-category-info-new',
        component: MeterCategoryInfoPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryInfo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-category-info/:id/edit',
        component: MeterCategoryInfoPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryInfo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-category-info/:id/delete',
        component: MeterCategoryInfoDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterCategoryInfo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
