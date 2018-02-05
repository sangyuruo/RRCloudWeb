import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { EmCloudWebSharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    GrowlDemoComponent,
    growlDemoRoute
} from './';

const primeng_STATES = [
    growlDemoRoute
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        WizardModule,
        ButtonModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        GrowlDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengGrowlDemoModule {}
