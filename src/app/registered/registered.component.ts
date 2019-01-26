import { Component, OnInit } from '@angular/core';
import {MockServiceService} from '../mock-service.service';
import { Student } from '../student';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { Students } from '../mock-students';
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
  form: FormGroup = undefined;
  filter: string;

  ngOnInit() {
    console.log('inside oninit');
    this.getStudents();
    for ( const student of this.students) {
      console.log('name' + student.name );
    }

    // this.form = new FormGroup({
    //   enrollment: new FormControl('20000', [ Validators.required, this.unique ]),
    //   name: new FormControl('', [ Validators.required, Validators.pattern( '^[a-zA-Z][a-zA-Z-_\.]{1,20}$')]) ,
    //   email: new FormControl('', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])
    // });
    console.log('after form intialization');
    for ( const student of this.students) {
      console.log('name' + student.name );
    }
  }
   unique(control: AbstractControl): ValidationErrors | null {
     console.log('uni');
    const t = parseInt(control.value, 10);
    console.log('t' + t);
    // const isunique = this.students.filter( (student) =>  student.enNo === (control.value as number) );
    let bool = false;
   // const b = isunique.length === 0 ;
   console.log('students inside uique ' + this.students[2].name);
   for (let i = 0 ; i < this.students.length ; i++) {
     if ( this.students[i].enNo === t) {
        bool = true;
        break;
     }
   }
    if ( bool ) {
        return { isunique: true};
    } else {
        return null;
    }
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
  }
  onClkDelete(): void {
    const index = this.students.indexOf(this.sSelected);
    this.students.splice(index, 1);
  }
  onClickSave(i: number): void {
    if ( this.update[i]) {
      this.update[i] = false;
      this.students[i].enNo = <number>this.enrollment.value;
        this.students[i].name = <string>this.name.value;
        this.students[i].email = <string>this.email.value;
        console.log(this.enrollment.value);
        console.log('email' + this.email.value);
        console.log(this.form.get('name').value);
        console.log('updated success');
      } else {
        this.update[i] = true;

      console.log(this.enrollment.value);
      }
  }
  onClickCancel(i: number): void {
    this.update[i] = !this.update[i];
  }
  onClickUpdate(i: number): void {
  debugger
  this.update[i] = !this.update[i];
  this.form = new FormGroup({
    enrollment: new FormControl( '', [ Validators.required, Validators.pattern('^[0-9]+$'), this.unique]),
    name: new FormControl('', [ Validators.required, Validators.pattern( '^[a-zA-Z][a-zA-Z-_\.]{1,20}$')]) ,
    email: new FormControl('' , [ Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])
  });
  }

  onFormSubmission(submited: boolean) {
    this.addClicked = false;
    console.log('submited successfully');
  }
  onclickAdd(): void {
    this.addClicked = !this.addClicked;
  }

}
