import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Student} from './../student';
import {MockServiceService} from './../mock-service.service';
import { OnInit } from '@angular/core';
export class EnrollmentValidator  {

    // constructor(private mockServices: MockServiceService) {}
    // static unique(control: AbstractControl): ValidationErrors | null {

    //     if ( this.mockServices.isEnrollmentUnique(control.value as number)) {
    //         return { isunique: true};
    //     } else {
    //         return null;
    //     }
    // }

    // ngOnInit() {
    //     this.getStudents();
    // }
    // getStudents(): void {
    //     this.mockServices.getStudents().subscribe(students => EnrollmentValidator.students = students);
    // }

}
