import { OnDestroy} from '@angular/core';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import {AbmComponent} from "../../../@bdmap/core/abm.component";
import {Router} from "@angular/router";

declare const BMap: any;
@Component({
    selector: 'mapHome',
    templateUrl: './mibaidumap.component.html',
    styleUrls: ['./mibaidumap.component.scss'],
/*
    encapsulation: ViewEncapsulation.None
*/
})

export class MibaidumapComponent implements OnDestroy {
    options: any = {}
    status: string = '';
    longitude:any;
    latitude:any;
    @ViewChild('map') mapComp: AbmComponent;

    constructor(private router: Router) { }

    private _map: any;
    onReady(map: any) {
        this._map = map;
        map.setMapStyle({
            styleJson: [{
                "featureType": "all",
                "elementType": "geometry",
                "stylers": {
                    "hue": "#007fff",
                    "saturation": 89
                }
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#ffffff"
                }
            }],
        });
        map.centerAndZoom(new BMap.Point(112.407672, 28.549992), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("益阳");
        map.enableScrollWheelZoom(true);
        this.status = '加载完成';
        //添加监听事件
        map.addEventListener('tilesloaded', () => {
            this.status = '地图加载完毕';
        });
        map.addEventListener('click', this._click.bind(this));
    }

    _click(e: any) {
        this.status = `${e.point.lng}, ${e.point.lat}, ${+new Date}`;
        console.log(e.point.lng);
        this.longitude=e.point.lng;
        this.latitude=e.point.lat;
    }

    ngOnDestroy(): void {
        /*    this._map.removeEventListener('click', this._click.bind(this));*/
    }

    getlng(){
        this.router.navigate(['/pages/mi/MeterInfo'],{ queryParams: { longitude:this.longitude,latitude:this.latitude } })
    }
}
