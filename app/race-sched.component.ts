import { Component } from '@angular/core';
import { Racing } from './racing-sched';



@Component({
    selector: 'race-sched',
    templateUrl: 'app/race-sched.component.html',
    styleUrls: ['app/race-sched.component.css']
})
export class RaceSchedComponent {
    heading = "Ultra Racing Schedule";
    races: Racing[] = [{
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
    totalEntrySlots() {
        return this.races.reduce(function (prev, current) { return prev + current.slots; }, 0)
    };
}

    
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



