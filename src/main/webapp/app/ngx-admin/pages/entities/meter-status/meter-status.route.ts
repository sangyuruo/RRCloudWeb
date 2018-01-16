import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { MeterStatusComponent } from './meter-status.component';
import { MeterStatusDetailComponent } from './meter-status-detail.component';
import { MeterStatusPopupComponent } from './meter-status-dialog.component';
import { MeterStatusDeletePopupComponent } from './meter-status-delete-dialog.component';

export const meterStatusRoute: Routes = [
    {
        path: 'meter-status',
        component: MeterStatusComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterStatus.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'meter-status/:id',
        component: MeterStatusDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterStatus.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const meterStatusPopupRoute: Routes = [
    {
        path: 'meter-status-new',
        component: MeterStatusPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterStatus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-status/:id/edit',
        component: MeterStatusPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterStatus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-status/:id/delete',
        component: MeterStatusDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.meterStatus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
