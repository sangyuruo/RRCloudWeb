import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../shared';
import {
    MeterStatusService,
    MeterStatusPopupService,
    MeterStatusComponent,
    MeterStatusDetailComponent,
    MeterStatusDialogComponent,
    MeterStatusPopupComponent,
    MeterStatusDeletePopupComponent,
    MeterStatusDeleteDialogComponent,
    meterStatusRoute,
    meterStatusPopupRoute,
} from './';

const ENTITY_STATES = [
    ...meterStatusRoute,
    ...meterStatusPopupRoute,
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        MeterStatusComponent,
        MeterStatusDetailComponent,
        MeterStatusDialogComponent,
        MeterStatusDeleteDialogComponent,
        MeterStatusPopupComponent,
        MeterStatusDeletePopupComponent,
    ],
    entryComponents: [
        MeterStatusComponent,
        MeterStatusDialogComponent,
        MeterStatusPopupComponent,
        MeterStatusDeleteDialogComponent,
        MeterStatusDeletePopupComponent,
    ],
    providers: [
        MeterStatusService,
        MeterStatusPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebMeterStatusModule {}
