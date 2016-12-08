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
// import { RACING } from './mocks'; tested - didn't need import with SERVICES and (inject)
var racing_data_service_1 = require('./racing-data.service');
var RaceSchedComponent = (function () {
    function RaceSchedComponent(racingDataService) {
        this.racingDataService = racingDataService;
        this.heading = "Ultra Racing Schedule";
        this.cash = 10000;
    }
    //     the constructor injects our dependency
    //     (this syntax with) private generates javascript that looks like this:
    //     function RaceSchedComponent(racingDataService) {
    //        this.racingDataService = racingDataService;
    //     }
    /* MOVED TO MOCKS.TS */
    // races: Racing[] = [{
    //     "id": 1,
    //     "name": "Daytona Thunderdome",
    //     "date": new Date('2017-01-04T14:00:00'),
    //     "about": "Race through the ruins of an ancient Florida battle arena.",
    //     "entryFee": 3200,
    //     "slots": 3,
    //     "isRacing": false,
    //     "price": 4.99
    // },{...}
    // ];
    RaceSchedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.racingDataService.getRaces()
            .subscribe(function (races) { return _this.races = races; });
    };
    ;
    RaceSchedComponent.prototype.totalCost = function () {
        var sum = 0;
        if (this.races) {
            for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
                var race = _a[_i];
                if (race.isRacing)
                    sum += race.entryFee;
                if (race.quantity)
                    sum += (race.quantity * race.tshirt);
            }
        }
        return sum;
    };
    ;
    RaceSchedComponent.prototype.cashLeft = function () {
        if (Array.isArray(this.races)) {
            var formatted_balance = this.cash - this.totalCost();
            return formatted_balance.toFixed(2);
        }
    };
    ;
    RaceSchedComponent.prototype.totalEntrySlots = function () {
        if (Array.isArray(this.races)) {
            return this.races.reduce(function (prev, current) { return prev + current.slots; }, 0);
        }
    };
    ;
    // totalEntrySlots() {
    //            if (Array.isArray(this.races)) {  //added, delete if breaking
    //     return this.races.reduce(function (prev, current) {
    //         return prev + current.slots;
    //     }, 0)
    //            }
    // };
    RaceSchedComponent.prototype.upQuantity = function (race) {
        if (race.stock > 0) {
            race.quantity++;
            race.stock--;
        }
    };
    ;
    RaceSchedComponent.prototype.downQuantity = function (race) {
        if (race.quantity != 0) {
            race.quantity--;
            race.stock++;
        }
        ;
        // inStock(event) {
        //      race.stock = event.target.value;
        //     }; //have to learn the right way to handle passing this event
    };
    ;
    RaceSchedComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
            race.slots--;
        }
        else {
            alert("You don't have enough cash hombre");
        }
    };
    ;
    RaceSchedComponent = __decorate([
        core_1.Component({
            selector: 'race-sched',
            templateUrl: 'app/race-sched.component.html',
            styleUrls: ['app/race-sched.component.css']
        }), 
        __metadata('design:paramtypes', [racing_data_service_1.RacingDataService])
    ], RaceSchedComponent);
    return RaceSchedComponent;
}());
exports.RaceSchedComponent = RaceSchedComponent;
;
//# sourceMappingURL=race-sched.component.js.map