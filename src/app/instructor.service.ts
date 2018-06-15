import { Injectable } from '@angular/core';
import { Instructor } from "./instructor";
import {Observable, Observer, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  instructors: Instructor[] = [
      {id: 1, name: 'Simon Borer', dateOfBirth: new Date('01/01/1980'), isPartTime: true},
      {id: 2, name: 'Lee Situ', dateOfBirth: new Date('01/01/1990'), isPartTime: true},
      {id: 3, name: 'Nithya Thayananthan', dateOfBirth: new Date('01/01/1970'), isPartTime: true},
      {id: 4, name: 'Joanna Kommala', dateOfBirth: new Date('01/01/1970'), isPartTime: true},
  ]

  getInstructors():Observable<Instructor[]> {
    return of(this.instructors);
  }

  constructor() { }
}
