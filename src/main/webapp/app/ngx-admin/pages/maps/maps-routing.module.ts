import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './maps.component';
import { GmapsComponent } from './gmaps/gmaps.component';
// import { LeafletComponent } from './leaflet/leaflet.component';
import { BubbleMapComponent } from './bubble/bubble-map.component';
import {BaiduMapsComponent} from "./baidu-maps/baidu-maps.component";
import {DemoComponent} from "./bdmaps/demo.component";
import {DemoPanoramaComponent} from "./bdmaps/panorama.component";
import {AbmComponent} from "./bdmaps/core/abm.component";
import {AbmPanoramaComponent} from "./bdmaps/core/abm-panorama.component";


const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [{
    path: 'gmaps',
    component: GmapsComponent,
  },
  //     {
  //   path: 'leaflet',
  //   component: LeafletComponent,
  // },
      {
    path: 'bubble',
    component: BubbleMapComponent,
  },
      {
          path: 'baidu-maps',
          component: BaiduMapsComponent,
      }
     ,
      {
          path: 'bdmaps',
          component: DemoComponent,
      }
      ,
      {
          path: 'panorama',
          component: DemoPanoramaComponent,
      }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  GmapsComponent,
  // LeafletComponent,
  BubbleMapComponent,
    BaiduMapsComponent,

    DemoComponent,
    DemoPanoramaComponent,

    AbmComponent,
    AbmPanoramaComponent

];
