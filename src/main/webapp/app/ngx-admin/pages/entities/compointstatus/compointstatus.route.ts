import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { CompointstatusComponent } from './compointstatus.component';
import { CompointstatusDetailComponent } from './compointstatus-detail.component';
import { CompointstatusPopupComponent } from './compointstatus-dialog.component';
import { CompointstatusDeletePopupComponent } from './compointstatus-delete-dialog.component';

@Injectable()
export class CompointstatusResolvePagingParams implements Resolve<any> {

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

export const compointstatusRoute: Routes = [
    {
        path: 'compointstatus',
        component: CompointstatusComponent,
        resolve: {
            'pagingParams': CompointstatusResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.compointstatus.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'compointstatus/:id',
        component: CompointstatusDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.compointstatus.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const compointstatusPopupRoute: Routes = [
    {
        path: 'compointstatus-new',
        component: CompointstatusPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.compointstatus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'compointstatus/:id/edit',
        component: CompointstatusPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.compointstatus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'compointstatus/:id/delete',
        component: CompointstatusDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.compointstatus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
