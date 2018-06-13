import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';
import { Class } from '../class';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  classes: Class[];

  constructor(
    private classesService: ClassesService
  ) { }

  getClasses(){
    console.log("get class");
    this.classesService.getClasses().subscribe(item => this.classes = item);
  }

  ngOnInit() {
    this.getClasses();
  }

}
