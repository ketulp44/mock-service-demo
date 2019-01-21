import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Students} from './mock-students';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {
  registeredStudents: Student[]  = [
    {enNo: 1, name: 'ketul', email: 'ketulp44@gmail.com' } ,
    {enNo: 2, name: 'kamil', email: 'kamil@gmail.com' } ,
    {enNo: 3, name: 'dixit', email: 'dixit@gmail.com' } ,
    {enNo: 4, name: 'parth', email: 'parth@gmail.com' } ,
    {enNo: 5, name: 'dhruv', email: 'dhruv@gmail.com' } ,
    {enNo: 6, name: 'raj', email: 'raj@gmail.com' } ,
    {enNo: 7, name: 'dhruvit', email: 'dhruvit@gmail.com' } ,
    {enNo: 8, name: 'krupang', email: 'krupang@gmail.com' } ,
    {enNo: 9, name: 'rohan', email: 'rohan@gmail.com' } ,
    {enNo: 10, name: 'nihar', email: 'nihar@gmail.com' } ,
    {enNo: 11, name: 'urvish', email: 'urvish@gmail.com' } ,
    {enNo: 13, name: 'om', email: 'om44@gmail.com' } ,
     {enNo: 12 , name: 'gaurang', email: 'gaurang@gmail.com'}
    ];

  getStudents(): Observable<Student[]> {
     return of(this.registeredStudents);
  }
  constructor() { }
}
