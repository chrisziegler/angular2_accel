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
var RaceSchedComponent = (function () {
    function RaceSchedComponent() {
        this.heading = "Ultra Racing Schedule";
        this.races = [{
                "id": 1,
                "name": "Daytona Thunderdome",
                "date": new Date('2017-01-04T14:00:00'),
                "about": "Race through the ruins of an ancient Florida battle arena.",
                "entryFee": 3200,
                "slots": 3,
                "isRacing": false,
                "price": 4.99
            }, {
                "id": 2,
                "name": "San Francisco Ruins",
                "date": new Date('2017-07-03T20:00:00'),
                "about": "Drift down the streets of a city almost sunk under the ocean.",
                "entryFee": 4700,
                "slots": 1,
                "isRacing": true,
                "price": 6.99
            }, {
                "id": 3,
                "name": "New York City Skyline",
                "date": new Date('2017-07-12T21:00:00'),
                "about": "Fly between buildings in the electronic sky.",
                "entryFee": 4300,
                "slots": 7,
                "isRacing": false,
                "price": 7.48
            }];
    }
    RaceSchedComponent.prototype.totalEntrySlots = function () {
        return this.races.reduce(function (prev, current) { return prev + current.slots; }, 0);
    };
    ;
    RaceSchedComponent = __decorate([
        core_1.Component({
            selector: 'race-sched',
            templateUrl: 'app/race-sched.component.html',
            styleUrls: ['app/race-sched.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RaceSchedComponent);
    return RaceSchedComponent;
}());
exports.RaceSchedComponent = RaceSchedComponent;
// template: `<h2>{{heading}}</h2>
// <p>There are {{totalEntrySlots()}} total entry slots available for racers.</p>
// <ul>
//   <li *ngFor="let race of races">
//     <h3 class="name">{{race.name | uppercase}}</h3>
//     <p>{{race.date | date:'MMM d, y, h:mm a' }}</p>
//     <p>{{race.about}}</p>
//     <p class="price">{{race.price | currency:'EUR':true}}</p>
//     <button *ngIf="race.isRacing === false" >Enter Race</button>
//     <h4 *ngIf="race.isRacing === true" >Already Racing</h4>
//   </li>
// </ul>
// `,
// styles: [`
//     .name {
//         color: #444;
//         font-weight: bold;
//     }
//     .price {
//     color: tomato;
// }
// `]
// totalEntrySlots() {
//     let sum = 0;
//     for (let race of this.races) {
//         sum += race.slots;
//     }
//     return sum; 
// }
//# sourceMappingURL=race-sched.component.js.map