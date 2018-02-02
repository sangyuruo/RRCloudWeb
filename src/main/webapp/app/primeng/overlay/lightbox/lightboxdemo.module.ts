import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmPrimengSharedModule } from '../../../shared';
import {LightboxModule} from 'primeng/components/lightbox/lightbox';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    LightboxDemoComponent,
    lightboxDemoRoute
} from './';

const primeng_STATES = [
    lightboxDemoRoute
];

@NgModule({
    imports: [
        EmPrimengSharedModule,
        LightboxModule,
        GrowlModule,
        BrowserAnimationsModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        LightboxDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengLightboxDemoModule {}
