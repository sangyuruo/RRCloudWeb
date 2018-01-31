import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmCloudWebCompanyModule } from './company/company.module';

import { EmCloudWebDictionaryModule } from './dictionary/dictionary.module';
import { EmCloudWebDictionaryclassifyModule } from './dictionaryclassify/dictionaryclassify.module';
import { EmCloudWebCompointModule } from './compoint/compoint.module';
import { EmCloudWebCompointstatusModule } from './compointstatus/compointstatus.module';
import { EmCloudWebAddressModule } from './address/address.module';
import { EmCloudWebAreaModule } from './area/area.module';
import { EmCloudWebOrganizationModule } from './organization/organization.module';
import { EmCloudWebMessageTemplateModule } from './message-template/message-template.module';

import { EmCloudWebMeterCategoryInfoModule } from './meter-category-info/meter-category-info.module';
import { EmCloudWebMeterInfoModule } from './meter-info/meter-info.module';
import { EmCloudWebMeterStatusModule } from './meter-status/meter-status.module';
import { EmCloudWebMultiwaySwitchInfoModule } from './multiway-switch-info/multiway-switch-info.module';
import { EmCloudWebMultiwaySwitchModule } from './multiway-switch/multiway-switch.module';
import { EmCloudWebAlarmRuleModule } from './alarm-rule/alarm-rule.module';
import { EmCloudWebRuleAttributesModule } from './rule-attributes/rule-attributes.module';
import { EmCloudWebMeterRuleModule } from './meter-rule/meter-rule.module';
import { EmCloudWebResourceModule } from './resource/resource.module';

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

        EmCloudWebOrganizationModule,
        EmCloudWebMessageTemplateModule,

        EmCloudWebMeterCategoryInfoModule,
        EmCloudWebMeterInfoModule,
        EmCloudWebMeterStatusModule,
        EmCloudWebMultiwaySwitchInfoModule,
        EmCloudWebMultiwaySwitchModule,
        EmCloudWebAlarmRuleModule,
        EmCloudWebRuleAttributesModule,
        EmCloudWebMeterRuleModule,
        EmCloudWebResourceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmCloudWebEntityModule {}
