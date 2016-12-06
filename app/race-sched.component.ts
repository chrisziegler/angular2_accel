import { Component } from '@angular/core';
import { Racing } from './racing-sched';
// import { RACING } from './mocks'; tested - didn't need import with SERVICES and (inject)
import { RacingDataService } from  './racing-data.service';



@Component({
    selector: 'race-sched',
    templateUrl: 'app/race-sched.component.html',
    styleUrls: ['app/race-sched.component.css']
})
export class RaceSchedComponent {
    heading = "Ultra Racing Schedule";
    cash = 10000;
    races: Racing[];

    constructor(private racingDataService: RacingDataService) {}

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

    ngOnInit() {
       this.racingDataService.getRaces()
       .subscribe(races => this.races = races);
    };

    totalCost() {
        let sum = 0;
        if (Array.isArray(this.races)) {
        for (let race of this.races) {
            if (race.isRacing) sum += race.entryFee;
            if (race.quantity) sum += (race.quantity * race.tshirt);
        }
        }
        return sum;
    };

    cashLeft() {
              if (Array.isArray(this.races)) {  //added, delete if breaking
        let formatted_balance = this.cash - this.totalCost();
        return formatted_balance.toFixed(2);
              }
    };

    totalEntrySlots() {
               if (Array.isArray(this.races)) {  
     return this.races.reduce((prev, current) => prev + current.slots, 0);
               }
    };  


    // totalEntrySlots() {
    //            if (Array.isArray(this.races)) {  //added, delete if breaking
    //     return this.races.reduce(function (prev, current) {
    //         return prev + current.slots;
    //     }, 0)
    //            }
    // };

    upQuantity(race) {
        if (race.stock > 0) {
            race.quantity++;
            race.stock--;
        }
    };
    downQuantity(race) {
        if (race.quantity != 0) {
            race.quantity--;
            race.stock++;
        };

    // inStock(event) {
    //      race.stock = event.target.value;
    //     }; //have to learn the right way to handle passing this event

    };
    enterRace(race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
            race.slots--;
        } else {
            alert("You don't have enough cash hombre");
        }
    };

};