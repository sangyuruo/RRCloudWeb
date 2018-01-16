import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../shared';
import {
    DictionaryclassifyService,
    DictionaryclassifyPopupService,
    DictionaryclassifyComponent,
    DictionaryclassifyDetailComponent,
    DictionaryclassifyDialogComponent,
    DictionaryclassifyPopupComponent,
    DictionaryclassifyDeletePopupComponent,
    DictionaryclassifyDeleteDialogComponent,
    dictionaryclassifyRoute,
    dictionaryclassifyPopupRoute,
    DictionaryclassifyResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...dictionaryclassifyRoute,
    ...dictionaryclassifyPopupRoute,
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DictionaryclassifyComponent,
        DictionaryclassifyDetailComponent,
        DictionaryclassifyDialogComponent,
        DictionaryclassifyDeleteDialogComponent,
        DictionaryclassifyPopupComponent,
        DictionaryclassifyDeletePopupComponent,
    ],
    entryComponents: [
        DictionaryclassifyComponent,
        DictionaryclassifyDialogComponent,
        DictionaryclassifyPopupComponent,
        DictionaryclassifyDeleteDialogComponent,
        DictionaryclassifyDeletePopupComponent,
    ],
    providers: [
        DictionaryclassifyService,
        DictionaryclassifyPopupService,
        DictionaryclassifyResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebDictionaryclassifyModule {}
