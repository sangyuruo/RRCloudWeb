import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './mi.component';



import { SmartTableComponent } from './meter-category-info/meter-category-info.component';
import {SmartTableComponent2} from "./meter-info/meter-info.component";
import {SmartTableComponent3} from "./meter-status/meter-status.component";
import {SmartTableComponent4} from "./multiway-switch-info/multiway-switch-info.component";
import {SmartTableComponent5} from "./multiway-switch/multiway-switch.component";

const routes: Routes = [{
    path: '',
    component: TablesComponent,
    children: [
        {
            path: 'MeterCategoryInfo',
            component: SmartTableComponent,
        },
        {
            path: 'MeterInfo',
            component: SmartTableComponent2,
        },
        {
            path: 'MeterStatus',
            component: SmartTableComponent3,
        },
        {
            path: 'multiwaySwitchInfo',
            component: SmartTableComponent4,
        },
        {
            path: 'MultiwaySwitch',
            component: SmartTableComponent5,
        },
    ],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
    SmartTableComponent2,
    SmartTableComponent3,
    SmartTableComponent4,
    SmartTableComponent5,
];
