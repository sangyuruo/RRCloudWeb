import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../shared';
import {
    CompointstatusService,
    CompointstatusPopupService,
    CompointstatusComponent,
    CompointstatusDetailComponent,
    CompointstatusDialogComponent,
    CompointstatusPopupComponent,
    CompointstatusDeletePopupComponent,
    CompointstatusDeleteDialogComponent,
    compointstatusRoute,
    compointstatusPopupRoute,
    CompointstatusResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...compointstatusRoute,
    ...compointstatusPopupRoute,
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CompointstatusComponent,
        CompointstatusDetailComponent,
        CompointstatusDialogComponent,
        CompointstatusDeleteDialogComponent,
        CompointstatusPopupComponent,
        CompointstatusDeletePopupComponent,
    ],
    entryComponents: [
        CompointstatusComponent,
        CompointstatusDialogComponent,
        CompointstatusPopupComponent,
        CompointstatusDeleteDialogComponent,
        CompointstatusDeletePopupComponent,
    ],
    providers: [
        CompointstatusService,
        CompointstatusPopupService,
        CompointstatusResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebCompointstatusModule {}
