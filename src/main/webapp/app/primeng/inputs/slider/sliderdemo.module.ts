import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmCloudWebSharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {SliderModule} from 'primeng/components/slider/slider';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    SliderDemoComponent,
    sliderDemoRoute
} from './';

const primeng_STATES = [
    sliderDemoRoute
];

@NgModule({
    imports: [
        EmCloudWebSharedModule,
        FormsModule,
        SliderModule,
        GrowlModule,
        InputTextModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        SliderDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengSliderDemoModule {}
