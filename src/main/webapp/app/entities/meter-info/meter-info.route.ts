import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { MeterInfoComponent } from './meter-info.component';
import { MeterInfoDetailComponent } from './meter-info-detail.component';
import { MeterInfoPopupComponent } from './meter-info-dialog.component';
import { MeterInfoDeletePopupComponent } from './meter-info-delete-dialog.component';

export const meterInfoRoute: Routes = [
    {
        path: 'meter-info',
        component: MeterInfoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterInfo.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'meter-info/:id',
        component: MeterInfoDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterInfo.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const meterInfoPopupRoute: Routes = [
    {
        path: 'meter-info-new',
        component: MeterInfoPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterInfo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-info/:id/edit',
        component: MeterInfoPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterInfo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-info/:id/delete',
        component: MeterInfoDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterInfo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
