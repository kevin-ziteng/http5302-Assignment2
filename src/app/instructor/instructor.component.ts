import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  instructors: Instructor[];

  constructor(private instructorService: InstructorService) { }

  getInstructors() {
    this.instructorService.getInstructors().subscribe(item => this.instructors = item);
  }

  ngOnInit() {
    this.getInstructors();
  }

}
