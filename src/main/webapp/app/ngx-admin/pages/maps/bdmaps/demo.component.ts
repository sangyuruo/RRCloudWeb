import { NgZone, OnDestroy } from '@angular/core';
/* tslint:disable */
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {AbmComponent} from "../../../@bdmap/core/abm.component";


declare const BMap: any;
declare const BMAP_SATELLITE_MAP: any;

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DemoComponent implements OnDestroy {
    options: any = {}
    status: string = '';
    @ViewChild('map') mapComp: AbmComponent;

    constructor(private el: ElementRef, private zone: NgZone) { }

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

        this.infoWindow();
    }

    _click(e: any) {
        this.status = `${e.point.lng}, ${e.point.lat}, ${+new Date}`;
    }

    panTo() {
        this._map.panTo(new BMap.Point(113.5472, 28.1459));
    }

    zoom() {
        this._map.setZoom((this._map.getZoom() + 1) % 17);
    }

    infoWindow() {
        // 创建地图实例
        var point = new BMap.Point(112.407672, 28.549992);
        // 创建点坐标
        this._map.centerAndZoom(point, 11);
        // 初始化地图， 设置中心点坐标和地图级别
        var marker = new BMap.Marker(point);
        this._map.addOverlay(marker);
    }

    // 卫星
    satelliteOptions: any;
    private mapSatellite: any;
    onReadySatellite(map: any) {
        map.centerAndZoom(new BMap.Point(112.407672, 28.549992), 11);
        map.setMapType(BMAP_SATELLITE_MAP);
        this.mapSatellite = map;
    }

    ngOnDestroy(): void {
        this._map.removeEventListener('click', this._click.bind(this));
    }

}
