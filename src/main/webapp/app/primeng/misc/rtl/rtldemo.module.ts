import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { EmCloudWebSharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    RTLDemoComponent,
    rtlDemoRoute
} from './';

const primeng_STATES = [
    rtlDemoRoute
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        AccordionModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        RTLDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengRTLDemoModule {}
