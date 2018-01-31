import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { MultiwaySwitchComponent } from './multiway-switch.component';
import { MultiwaySwitchDetailComponent } from './multiway-switch-detail.component';
import { MultiwaySwitchPopupComponent } from './multiway-switch-dialog.component';
import { MultiwaySwitchDeletePopupComponent } from './multiway-switch-delete-dialog.component';

export const multiwaySwitchRoute: Routes = [
    {
        path: 'multiway-switch',
        component: MultiwaySwitchComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.multiwaySwitch.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'multiway-switch/:id',
        component: MultiwaySwitchDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.multiwaySwitch.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const multiwaySwitchPopupRoute: Routes = [
    {
        path: 'multiway-switch-new',
        component: MultiwaySwitchPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.multiwaySwitch.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'multiway-switch/:id/edit',
        component: MultiwaySwitchPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.multiwaySwitch.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'multiway-switch/:id/delete',
        component: MultiwaySwitchDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.multiwaySwitch.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
