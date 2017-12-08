import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../shared';
import {
    MultiwaySwitchService,
    MultiwaySwitchPopupService,
    MultiwaySwitchComponent,
    MultiwaySwitchDetailComponent,
    MultiwaySwitchDialogComponent,
    MultiwaySwitchPopupComponent,
    MultiwaySwitchDeletePopupComponent,
    MultiwaySwitchDeleteDialogComponent,
    multiwaySwitchRoute,
    multiwaySwitchPopupRoute,
} from './';

const ENTITY_STATES = [
    ...multiwaySwitchRoute,
    ...multiwaySwitchPopupRoute,
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        MultiwaySwitchComponent,
        MultiwaySwitchDetailComponent,
        MultiwaySwitchDialogComponent,
        MultiwaySwitchDeleteDialogComponent,
        MultiwaySwitchPopupComponent,
        MultiwaySwitchDeletePopupComponent,
    ],
    entryComponents: [
        MultiwaySwitchComponent,
        MultiwaySwitchDialogComponent,
        MultiwaySwitchPopupComponent,
        MultiwaySwitchDeleteDialogComponent,
        MultiwaySwitchDeletePopupComponent,
    ],
    providers: [
        MultiwaySwitchService,
        MultiwaySwitchPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebMultiwaySwitchModule {}
