import { Injectable } from '@angular/core';
import { Class } from './class';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    } else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened!');
  }

  classes: Class[] = [
    {
      id: 1,
      code: 'Http5301',
      name: 'Usability and Accessibility',
      instructor: 'Simon Borer',
      selected: true
    },
    {
      id: 2,
      code: 'Http5302',
      name: 'Trends in Web Development',
      instructor: 'Lee Situ',
      selected: true
    },
    {
      id: 3,
      code: 'Http5303',
      name: 'Web Project',
      instructor: 'Nithya Thayananthan',
      selected: true
    },
    {
      id: 4,
      code: 'Http5304',
      name: 'Portfolio Development',
      instructor: 'Joanna Kommala',
      selected: true
    }
  ];

  getClasses(): Observable<Class[]>{
    // return of(this.classes);
    return this.http.get<Class[]>('http://wangziteng.com/api.php?api_key=testkey2').pipe(
      catchError(this.handleError)
    );
  }

  constructor(
    private http: HttpClient
  ) { }
}
