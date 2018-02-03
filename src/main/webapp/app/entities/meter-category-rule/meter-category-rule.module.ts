import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../shared';
import {
    MeterCategoryRuleService,
    MeterCategoryRulePopupService,
    MeterCategoryRuleComponent,
    MeterCategoryRuleDetailComponent,
    MeterCategoryRuleDialogComponent,
    MeterCategoryRulePopupComponent,
    MeterCategoryRuleDeletePopupComponent,
    MeterCategoryRuleDeleteDialogComponent,
    meterCategoryRuleRoute,
    meterCategoryRulePopupRoute,
    MeterCategoryRuleResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...meterCategoryRuleRoute,
    ...meterCategoryRulePopupRoute,
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        MeterCategoryRuleComponent,
        MeterCategoryRuleDetailComponent,
        MeterCategoryRuleDialogComponent,
        MeterCategoryRuleDeleteDialogComponent,
        MeterCategoryRulePopupComponent,
        MeterCategoryRuleDeletePopupComponent,
    ],
    entryComponents: [
        MeterCategoryRuleComponent,
        MeterCategoryRuleDialogComponent,
        MeterCategoryRulePopupComponent,
        MeterCategoryRuleDeleteDialogComponent,
        MeterCategoryRuleDeletePopupComponent,
    ],
    providers: [
        MeterCategoryRuleService,
        MeterCategoryRulePopupService,
        MeterCategoryRuleResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebMeterCategoryRuleModule {}
