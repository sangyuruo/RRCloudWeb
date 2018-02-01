import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
// import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
//import {AbmConfig} from 'angular-baidu-maps';
import {LoaderService} from 'angular-baidu-maps/core/loader.service';


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

        //增加百度地图服务
      //  AbmConfig,
        LoaderService

    ],
})
export class MapsModule { }
