"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AbmComponent = (function () {
    function AbmComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new core_1.EventEmitter();
        this.map = null;
    }
    AbmComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AbmComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AbmComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Map(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('地图初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AbmComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.mapOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AbmComponent.prototype.destroy = function () {
        if (this.map) {
            this.map.clearOverlays();
            this.map.clearHotspots();
        }
    };
    AbmComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    __decorate([
        core_1.Input()
    ], AbmComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output()
    ], AbmComponent.prototype, "ready", void 0);
    AbmComponent = __decorate([
        core_1.Component({
            selector: 'abm-map',
            template: "",
            styles: ["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],
            host: {
                '[class.angular-baidu-maps-container]': 'true'
            },
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AbmComponent);
    return AbmComponent;
}());
exports.AbmComponent = AbmComponent;
