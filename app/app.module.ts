import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RaceSchedComponent} from './race-sched.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RaceSchedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
