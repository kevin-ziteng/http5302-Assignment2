import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';
import { InstructorComponent } from './instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
