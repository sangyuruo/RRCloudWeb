import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmCloudWebCompanyModule } from './company/company.module';
import { EmCloudWebOrganizationModule } from './organization/organization.module';
import { EmCloudWebDictionaryModule } from './dictionary/dictionary.module';
import { EmCloudWebDictionaryClassifyModule } from './dictionary-classify/dictionary-classify.module';
import { EmCloudWebAreaModule } from './area/area.module';
import { EmCloudWebAddressModule } from './address/address.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EmCloudWebCompanyModule,
        EmCloudWebOrganizationModule,
        EmCloudWebDictionaryModule,
        EmCloudWebDictionaryClassifyModule,
        EmCloudWebAreaModule,
        EmCloudWebAddressModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebEntityModule {}
