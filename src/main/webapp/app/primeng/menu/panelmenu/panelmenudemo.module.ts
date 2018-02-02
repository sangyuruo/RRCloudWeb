import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { EmPrimengSharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/components/panelmenu/panelmenu';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    PanelMenuDemoComponent,
    panelmenuDemoRoute
} from './';

const primeng_STATES = [
    panelmenuDemoRoute
];

@NgModule({
    imports: [
        EmPrimengSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        PanelMenuModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        PanelMenuDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengPanelMenuDemoModule {}
