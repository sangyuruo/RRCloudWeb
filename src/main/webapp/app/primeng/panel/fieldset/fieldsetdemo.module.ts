import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here

import { EmCloudWebSharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    FieldsetDemoComponent,
    fieldsetDemoRoute
} from './';

const primeng_STATES = [
    fieldsetDemoRoute
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        FieldsetModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        FieldsetDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengFieldsetDemoModule {}
