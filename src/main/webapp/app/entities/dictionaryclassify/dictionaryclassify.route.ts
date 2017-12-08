import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { DictionaryclassifyComponent } from './dictionaryclassify.component';
import { DictionaryclassifyDetailComponent } from './dictionaryclassify-detail.component';
import { DictionaryclassifyPopupComponent } from './dictionaryclassify-dialog.component';
import { DictionaryclassifyDeletePopupComponent } from './dictionaryclassify-delete-dialog.component';

@Injectable()
export class DictionaryclassifyResolvePagingParams implements Resolve<any> {

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

export const dictionaryclassifyRoute: Routes = [
    {
        path: 'dictionaryclassify',
        component: DictionaryclassifyComponent,
        resolve: {
            'pagingParams': DictionaryclassifyResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.dictionaryclassify.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'dictionaryclassify/:id',
        component: DictionaryclassifyDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.dictionaryclassify.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const dictionaryclassifyPopupRoute: Routes = [
    {
        path: 'dictionaryclassify-new',
        component: DictionaryclassifyPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.dictionaryclassify.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'dictionaryclassify/:id/edit',
        component: DictionaryclassifyPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.dictionaryclassify.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'dictionaryclassify/:id/delete',
        component: DictionaryclassifyDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.dictionaryclassify.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
