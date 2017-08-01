import { Component, OnInit } from '@angular/core';
import {Student} from "../models/student";
import {Gender} from "../models/gender";
import {Subject} from "../models/subject";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {

  selectedStudent: Student;
  chosenStudent: Student;
  visibleRows: number;
  students: Array<Student>;
  showStudentDialog: boolean;
  birthYear: number;
  minBirthYear: number;
  maxBirthYear: number;
  subjects: Array<Subject>;
  genders: Array<Gender>;
  constructor() { }

  ngOnInit() {
    this.genders = [{ label: '全部',value:'' },{ label: '男',value:'MALE' },{ label: '女', value:'FEMALE'}];
    this.subjects = [{ label: '全部',value:'' },{label: '文科',value:'文科'},{label: '理科',value:'理科'}];
    this.minBirthYear = 1950;
    this.maxBirthYear = new Date().getFullYear();
    this.showStudentDialog = false;
    this.chosenStudent = new Student(
      'name',
      'idCard',
      'MALE',
      'orignSchool',
      'grade',
      '2017-12-21',
      'subject',
      'source',
      'phone',
      'parentName',
      'MALE',
      'parentIdCard',
      'parentPhone',
      'address',
      'remark'
    );
    this.students = [
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        'grade',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        'grade',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        'grade',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        'grade',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        'grade',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark'
      )
    ]
  }

  onRowSelect(): void {

  }

  deleteStudent():void {

  }

  saveEditedStudent():void {

  }

  showAdderDialog():void {

  }

}
