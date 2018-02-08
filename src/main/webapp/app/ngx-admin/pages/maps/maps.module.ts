import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import {AbmModule} from "../../@bdmap/index";




@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    // LeafletModule.forRoot(),
    MapsRoutingModule,
    AngularEchartsModule,

      AbmModule.forRoot({
          apiKey: 'SSIGjdDybXdVt5wBDrnAjGbZ9hvwOgVp' // app key为必选项
      })
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],

    providers: [
    ],
})
export class MapsModule { }
