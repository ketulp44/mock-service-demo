import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import {MockServiceService} from '../mock-service.service';
import { Students } from '../mock-students';
import { forEach } from '@angular/router/src/utils/collection';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent implements OnInit {
  profileForm: FormGroup;
  student: Student;
  students: Student[];
  constructor(private mockServices: MockServiceService ) { }


  onSubmit() {
    console.log('asdsad');
    console.log(this.profileForm.controls['enrollno'].value);
    // TODO: Use EventEmitter with form value
    this.students.push( {enNo : this.profileForm.controls['enrollno'].value,
    name: this.profileForm.controls['name'].value,
     email: this.profileForm.controls['email'].value} );
  }
  ngOnInit() {
    this.getStudents();

  this.profileForm = new FormGroup({
    enrollno: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]{10,10}')]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])
  });
  }
  getStudents(): void {
    console.log('Hello d');
    this.mockServices.getStudents().subscribe(students => this.students = students);
    }
    get name() {
      console.log('name debug');
      return this.profileForm.get('name');
    }
    get email() {
      console.log('email debug');
      return this.profileForm.get('email');
    }
    get enrollno() {
      console.log('enroll debug');
      return this.profileForm.get('enrollno');
    }
}
