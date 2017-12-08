import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmCloudWebCompanyModule } from './company/company.module';
import { EmCloudWebDictionaryModule } from './dictionary/dictionary.module';
import { EmCloudWebDictionaryclassifyModule } from './dictionaryclassify/dictionaryclassify.module';
import { EmCloudWebCompointModule } from './compoint/compoint.module';
import { EmCloudWebCompointstatusModule } from './compointstatus/compointstatus.module';
import { EmCloudWebAddressModule } from './address/address.module';
import { EmCloudWebAreaModule } from './area/area.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EmCloudWebCompanyModule,
        EmCloudWebDictionaryModule,
        EmCloudWebDictionaryclassifyModule,
        EmCloudWebCompointModule,
        EmCloudWebCompointstatusModule,
        EmCloudWebAddressModule,
        EmCloudWebAreaModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebEntityModule {}
