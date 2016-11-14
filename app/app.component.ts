import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>{{heading}}</h1>
    <p>There are {{totalEntrySlots()}} total entry slots available for racers.</p>
    <ul>
      <li *ngFor="let race of races">
        <h2>{{race.name | uppercase}}</h2>
        <p>{{race.date | date:'MMM d, y, h:mm a' }}</p>
        <p>{{race.about}}</p>
        <p>{{race.price | currency:'EUR':true}}</p>
        <button *ngIf="race.isRacing === false" >Enter Race</button>
        <h3 *ngIf="race.isRacing === true" >Already Racing</h3>
      </li>
    </ul>
    `
})
export class AppComponent {
    heading = "Ultra Racing Schedule"
    races = [{
        "id": 1,
        "name": "Daytona Thunderdome",
        "date": new Date('2017-01-04T14:00:00'),
        "about": "Race through the ruins of an ancient Florida battle arena.",
        "entryFee": 3200,
        "slots": 5,
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
            return this.races.reduce(function(prev,current){return prev + current.slots;}, 0)};
        }
    // totalEntrySlots() {
    //     let sum = 0;
    //     for (let race of this.races) {
    //         sum += race.slots;
    //     }
    //     return sum; 
    // }



