import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MultiwaySwitchComponent} from "./multiway-switch/multiway-switch.component";
import {MeterCategoryInfoComponent} from "./meter-category-info/meter-category-info.component";
import {MeterInfoComponent} from "./meter-info/meter-info.component";
import {MeterStatusComponent} from "./meter-status/meter-status.component";
import {MultiwaySwitchInfoComponent} from "./multiway-switch-info/multiway-switch-info.component";
import {MiComponent} from "./mi.component";
import {MibaidumapComponent} from "./mibaidumap/mibaidumap.component";


const routes: Routes = [{
    path: '',
    component: MiComponent,
    children: [
        {
            path: 'MeterCategoryInfo',
            component: MeterCategoryInfoComponent,
        },
        {
            path: 'MeterInfo',
            component: MeterInfoComponent,
        },
        {
            path: 'MeterStatus',
            component: MeterStatusComponent,
        },
        {
            path: 'multiwaySwitchInfo',
            component: MultiwaySwitchInfoComponent,
        },
        {
            path: 'MultiwaySwitch',
            component: MultiwaySwitchComponent,
        },

        {
            path: 'MibaiduMap',
            component: MibaidumapComponent,
        }
    ],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TablesRoutingModule { }

export const routedComponents = [
    MiComponent,
    MeterCategoryInfoComponent,
    MeterInfoComponent,
    MeterStatusComponent,
    MultiwaySwitchInfoComponent,
    MultiwaySwitchComponent,

    MibaidumapComponent

];
