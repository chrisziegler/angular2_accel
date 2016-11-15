import { Component } from '@angular/core';
import { RaceSchedComponent } from './race-sched.component';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
      <race-sched></race-sched>`
})
export class AppComponent {
    title = "Ultra Racing Supersite";
}
    // totalEntrySlots() {
    //     let sum = 0;
    //     for (let race of this.races) {
    //         sum += race.slots;
    //     }
    //     return sum; 
    // }



