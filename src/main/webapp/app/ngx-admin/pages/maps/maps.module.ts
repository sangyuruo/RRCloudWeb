import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';



@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    // LeafletModule.forRoot(),
    MapsRoutingModule,
    AngularEchartsModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],

    providers: [





    ],
})
export class MapsModule { }
