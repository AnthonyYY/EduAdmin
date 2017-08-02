import { Component, OnInit } from '@angular/core';
import {Student} from "../models/student";
import {Gender} from "../models/gender";
import {Subject} from "../models/subject";
import {Grade} from "../models/grade";
import {ConfirmationService} from "primeng/primeng";

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
  grades: Array<Grade>;
  constructor(
    private confirmationService:ConfirmationService
  ) { }

  ngOnInit() {
    this.visibleRows = 12;
    this.grades = [{label:'全部',value: ''},{label:'一年级',value:1},{label:'二年级',value:2},{label:'三年级',value:3},{label:'四年级',value:4},{label:'五年级',value:5},{label:'六年级',value:6},{label:'初一',value:7},{label:'初二',value:8},{label:'初三',value:9},{label:'高一',value:10},{label:'高二',value:11},{label:'高三',value:12}];
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
      '2',
      '2017-12-21',
      'subject',
      'source',
      'phone',
      'parentName',
      'MALE',
      'parentIdCard',
      'parentPhone',
      'address',
      'remark',
      '3'
    );
    this.students = [

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),

      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      ),
      new Student(
        'name',
        'idCard',
        'MALE',
        'orignSchool',
        '2',
        '2017-12-21',
        'subject',
        'source',
        'phone',
        'parentName',
        'MALE',
        'parentIdCard',
        'parentPhone',
        'address',
        'remark',
        '3'
      )

    ]
  }

  onRowSelect(): void {
    this.chosenStudent = {...this.selectedStudent};
    this.showStudentDialog = true;
  }

  deleteStudent(studentName):void {
    this.confirmationService.confirm({
      message: `确定删除[${studentName}]员工信息`,
      accept: () => {
        const toDeleteStudentIndex = this.findChosenStudentIndex();
        this.students.splice(toDeleteStudentIndex,1);
        this.students = [...this.students];
        this.showStudentDialog = false;
      }
    })
  }

  saveEditedStudent():void {
    const toSaveStudentIndex = this.findChosenStudentIndex();
    this.students[toSaveStudentIndex] = this.chosenStudent;
    this.students = [...this.students];
    this.showStudentDialog= false;
  };

  showAdderDialog():void {
    this.chosenStudent = new Student(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    this.showStudentDialog = true;
  }

  findChosenStudentIndex():number{
    return this.students.indexOf(this.selectedStudent);
  }

}
