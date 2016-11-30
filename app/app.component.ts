import { Component } from '@angular/core';
import { RaceSchedComponent } from './race-sched.component';
// import {RacingDataService} from './racing-data.service';

@Component({
    selector: 'my-app',
    template: `<h1 id="brand">{{title}}</h1>
      <race-sched></race-sched>`
    //   directives: [RaceSchedComponent],
    //   providers: [RacingDataService]  //can't seem to make these work here a la codeschool
})
export class AppComponent {
    title = "Ultra Racing Supersite";
}
// This is a top level component that we load our other components into  
// We could design the templateURL as a temolate for the structure of our page, 
// or just include sitewide components like header, footers, and the nav, here



