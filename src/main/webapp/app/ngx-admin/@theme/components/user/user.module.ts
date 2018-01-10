/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';


import { NbUserComponent} from './user.component';
import {NbSharedModule} from "@nebular/theme/components/shared/shared.module";

const NB_USER_COMPONENTS = [
  NbUserComponent,
];

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    ...NB_USER_COMPONENTS,
  ],
  exports: [
    ...NB_USER_COMPONENTS,
  ],
})
export class NbUserModule { }
