import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';



import { SmartTableComponent } from './MeterCategoryInfo/smart-table.component';
import {SmartTableComponent2} from "./MeterInfo/smart-table.component";
import {SmartTableComponent3} from "./MeterStatus/smart-table.component";
import {SmartTableComponent4} from "./MultiwaySwitchInfo/smart-table.component";
import {SmartTableComponent5} from "./MultiwaySwitch/smart-table.component";

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
