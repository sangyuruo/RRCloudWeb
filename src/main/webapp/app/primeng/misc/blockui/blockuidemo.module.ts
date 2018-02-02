import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { EmCloudWebSharedModule } from '../../../shared';
import {ButtonModule} from 'primeng/components/button/button';
import {PanelModule} from 'primeng/components/panel/panel';
import {BlockUIModule} from 'primeng/components/blockui/blockui';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    BlockUIDemoComponent,
    blockuiDemoRoute
} from './';

const primeng_STATES = [
    blockuiDemoRoute
];

@NgModule({
    imports: [
        EmCloudWebSharedModule ,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ButtonModule,
        PanelModule,
        WizardModule,
        BlockUIModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        BlockUIDemoComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengBlockUIDemoModule {} {}
