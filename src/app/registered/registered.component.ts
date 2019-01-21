import { Component, OnInit } from '@angular/core';
import { Students} from '../mock-students';
import { from } from 'rxjs';
import {MockServiceService} from '../mock-service.service';
import { Student } from '../student';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  constructor(private mockServices: MockServiceService) { }
  students: Student[];
  sSelected: Student;
  addClicked = false;
  p = 1;
  key = 'name';
  reverse = false;
  update: Boolean[] = [];
  form = new FormGroup({
    enrollment: new FormControl('', [ Validators.required, Validators.pattern('^[0-9]{10}$')]),
    name: new FormControl('', [ Validators.required, Validators.pattern( '^[a-zA-Z][a-zA-Z-_\.]{1,20}$')]) ,
    email: new FormControl('', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])
  });
    ngOnInit() {
    this.getStudents();
  }
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get enrollment() {
    return this.form.get('enrollment');
  }
  sort(key) {

    this.key = key;

    this.reverse = !this.reverse;

  }
  getStudents(): void {
    this.mockServices.getStudents().subscribe(students => this.students = students);
  }
  onClickDelete(student: Student): void {
  this.sSelected = student;
  console.log('name'+this.sSelected.name);
  console.log('submited successfully');
  }
  onClkDelete(): void {
    const index = this.students.indexOf(this.sSelected);
    console.log('name'+this.sSelected.name);
    this.students.splice(index, 1);
    console.log('submited successfully');
  }
  onClickUpdate(i: number): void {
    if ( this.update[i]) {
      this.update[i] = false;
      this.students[i].enNo = <number>this.enrollment.value;
        this.students[i].name = <string>this.name.value;
        this.students[i].email = <string>this.email.value;
        
      } else {
        
        this.update[i] = true;
    this.form = new FormGroup({
      enrollment: new FormControl( this.students[i].enNo, [ Validators.required, Validators.pattern('^[0-9]{10}$')]),
      name: new FormControl(this.students[i].name, [ Validators.required, Validators.pattern( '^[a-zA-Z][a-zA-Z-_\.]{1,20}$')]) ,
      email: new FormControl(this.students[i].email , [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])
    });
    
  }
  }
  onFormSubmission(submited: boolean) {
    this.addClicked = false;
    
  }
  onclickAdd(): void {
    this.addClicked = !this.addClicked;
  }
}
