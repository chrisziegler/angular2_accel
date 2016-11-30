"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {RacingDataService} from './racing-data.service';
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ultra Racing Supersite";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 id=\"brand\">{{title}}</h1>\n      <race-sched></race-sched>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// This is a top level component that we load our other components into  
// We could design the templateURL as a temolate for the structure of our page, 
// or just include sitewide components like header, footers, and the nav, here
//# sourceMappingURL=app.component.js.map