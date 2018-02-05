import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../../shared';
import {ButtonModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    MessagesDemoComponent,
    messagesDemoRoute
} from './';

const primeng_STATES = [
    messagesDemoRoute
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        ButtonModule,
        MessagesModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        MessagesDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengMessagesDemoModule {}
