import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { RaceSchedComponent} from './race-sched.component';
import { RacingDataService } from './racing-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RaceSchedComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ RacingDataService ]
})
export class AppModule { }

