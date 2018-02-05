import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { AnalysisEngineComponent } from './analysis-engine.component';
import { AnalysisEngineDetailComponent } from './analysis-engine-detail.component';
import { AnalysisEnginePopupComponent } from './analysis-engine-dialog.component';
import { AnalysisEngineDeletePopupComponent } from './analysis-engine-delete-dialog.component';

@Injectable()
export class AnalysisEngineResolvePagingParams implements Resolve<any> {

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

export const analysisEngineRoute: Routes = [
    {
        path: 'analysis-engine',
        component: AnalysisEngineComponent,
        resolve: {
            'pagingParams': AnalysisEngineResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.analysisEngine.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'analysis-engine/:id',
        component: AnalysisEngineDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.analysisEngine.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const analysisEnginePopupRoute: Routes = [
    {
        path: 'analysis-engine-new',
        component: AnalysisEnginePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.analysisEngine.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'analysis-engine/:id/edit',
        component: AnalysisEnginePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.analysisEngine.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'analysis-engine/:id/delete',
        component: AnalysisEngineDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'emCloudWebApp.analysisEngine.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
