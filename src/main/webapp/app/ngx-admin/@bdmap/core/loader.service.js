"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoaderService = (function () {
    function LoaderService(cog) {
        this._cog = Object.assign({
            apiProtocol: 'auto',
            apiVersion: '2.0',
            apiCallback: 'angularBaiduMapsLoader',
            apiHostAndPath: 'api.map.baidu.com/api'
        }, cog);
    }
    LoaderService.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this._getSrc();
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            window[_this._cog.apiCallback] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LoaderService.prototype._getSrc = function () {
        var protocol;
        switch (this._cog.apiProtocol) {
            case 'http':
                protocol = 'http:';
                break;
            case 'https':
                protocol = 'https:';
                break;
            default:
                protocol = '';
                break;
        }
        var queryParams = {
            v: this._cog.apiVersion,
            ak: this._cog.apiKey,
            callback: this._cog.apiCallback
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            return !Array.isArray(queryParams[k]) || (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            var i = queryParams[k];
            if (Array.isArray(i))
                return { key: k, value: i.join(',') };
            return { key: k, value: i };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + this._cog.apiHostAndPath + "?" + params;
    };
    LoaderService = __decorate([
        core_1.Injectable()
    ], LoaderService);
    return LoaderService;
}());
exports.LoaderService = LoaderService;
