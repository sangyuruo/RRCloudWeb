"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var loader_service_1 = require("../core/loader.service");
var index_1 = require("../index");
describe('Service: LoaderService', function () {
    var fixture;
    var el;
    var htmlEl;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [EmptyTestComponent],
            imports: [index_1.AbmModule.forRoot({ apiKey: '' })],
            providers: [loader_service_1.LoaderService, { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }]
        });
        fixture = testing_1.TestBed.createComponent(EmptyTestComponent);
        el = fixture.nativeElement;
        fixture.detectChanges();
        htmlEl = findParent(el, 'html');
    });
    it('should create the default script URL', testing_1.inject([loader_service_1.LoaderService], function (loader) {
        loader.load();
        var script = null;
        var ls = htmlEl.querySelectorAll('script');
        for (var i = 0; i < ls.length; i++) {
            var node = ls[i];
            // tslint:disable-next-line:no-bitwise
            if (~node.src.indexOf('api.map.baidu.com/api'))
                script = node;
        }
        expect(script).not.toBeNull();
        expect(script.type).toEqual('text/javascript');
        expect(script.async).toEqual(true);
        expect(script.defer).toEqual(true);
        expect(script.src).toBeDefined();
    }));
});
function findParent(el, selector) {
    var retEl = null;
    while (el) {
        if (el.matches(selector)) {
            retEl = el;
            break;
        }
        el = el.parentElement;
    }
    return retEl;
}
var EmptyTestComponent = (function () {
    function EmptyTestComponent() {
    }
    EmptyTestComponent = __decorate([
        core_1.Component({ template: '' })
    ], EmptyTestComponent);
    return EmptyTestComponent;
}());
