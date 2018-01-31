import { NgZone, OnDestroy } from '@angular/core';
/* tslint:disable */
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AbmComponent } from 'angular-baidu-maps';

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
        // let infoWin = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", {
        //     width: 200,     // 信息窗口宽度
        //     height: 100,     // 信息窗口高度
        //     title: "海底捞王府井店", // 信息窗口标题
        //     enableMessage: true,//设置允许信息窗发送短息
        //     message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        // });
        // this._map.openInfoWindow(infoWin, this._map.getCenter());

       // var map = new BMap.Map('container');
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
        map.centerAndZoom(new BMap.Point(113.5472, 28.1459), 11);
        map.setMapType(BMAP_SATELLITE_MAP);
        this.mapSatellite = map;
    }

    ngOnDestroy(): void {
        this._map.removeEventListener('click', this._click.bind(this));
    }

}
