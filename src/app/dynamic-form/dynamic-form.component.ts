import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {MockServiceService} from './../mock-service.service';
import {Student} from '../student';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  student: Student;
  students: Student[];
  submited: Boolean;
  @Input()addClicked: boolean;
  @Output() added = new EventEmitter<boolean>();
  constructor(private mockServices: MockServiceService) {}
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
  getStudents(): void {
    this.mockServices.getStudents().subscribe(students => this.students = students);
  }
  onClick(): void {
    this.students.push({
      'enNo': <number>this.enrollment.value,
      'name': <string>this.name.value,
      'email': <string>this.email.value
    });
    this.added.emit(true);
  }
}
