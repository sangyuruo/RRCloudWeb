import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { EmPrimengSharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {EmployeeService} from './service/employee.service';

import {
    ContextMenuDemoComponent,
    contextmenuDemoRoute
} from './';

const primeng_STATES = [
    contextmenuDemoRoute
];

@NgModule({
    imports: [
        EmPrimengSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ContextMenuModule,
        GrowlModule,
        DataTableModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ContextMenuDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},EmployeeService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmPrimengContextMenuDemoModule {}
