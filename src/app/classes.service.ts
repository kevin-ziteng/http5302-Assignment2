import { Injectable } from '@angular/core';
import { Class } from './class';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  classes: Class[] = [
    {
      id: 1,
      code: 'Http5301',
      name: 'Usability and Accessibility',
      instructor: 'Simon Borer'
    },
    {
      id: 2,
      code: 'Http5302',
      name: 'Trends in Web Development',
      instructor: 'Lee Situ'
    },
    {
      id: 3,
      code: 'Http5303',
      name: 'Web Project',
      instructor: 'Nithya Thayananthan'
    },
    {
      id: 4,
      code: 'Http5304',
      name: 'Portfolio Development',
      instructor: 'Joanna Kommala'
    }
  ];

  getClasses(): Observable<Class[]>{
    return of(this.classes);
  }

  constructor() { }
}
