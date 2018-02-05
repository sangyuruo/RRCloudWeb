import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../shared';
import {
    AnalysisEngineService,
    AnalysisEnginePopupService,
    AnalysisEngineComponent,
    AnalysisEngineDetailComponent,
    AnalysisEngineDialogComponent,
    AnalysisEnginePopupComponent,
    AnalysisEngineDeletePopupComponent,
    AnalysisEngineDeleteDialogComponent,
    analysisEngineRoute,
    analysisEnginePopupRoute,
    AnalysisEngineResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...analysisEngineRoute,
    ...analysisEnginePopupRoute,
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AnalysisEngineComponent,
        AnalysisEngineDetailComponent,
        AnalysisEngineDialogComponent,
        AnalysisEngineDeleteDialogComponent,
        AnalysisEnginePopupComponent,
        AnalysisEngineDeletePopupComponent,
    ],
    entryComponents: [
        AnalysisEngineComponent,
        AnalysisEngineDialogComponent,
        AnalysisEnginePopupComponent,
        AnalysisEngineDeleteDialogComponent,
        AnalysisEngineDeletePopupComponent,
    ],
    providers: [
        AnalysisEngineService,
        AnalysisEnginePopupService,
        AnalysisEngineResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebAnalysisEngineModule {}
