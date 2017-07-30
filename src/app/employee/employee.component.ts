import { Component, OnInit } from '@angular/core';
import {Employee} from "../models/employee";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  employees: Array<Employee>;
  selectedEmployee: Employee;
  chosenEmployee: Employee;
  showEmployeeDialog: boolean;
  keyword = new FormControl();
  genders: [{label: '男',value: 'MALE'} | {label: '女',value: 'FEMALE'}];
  constructor() { }

  ngOnInit() {
    this.showEmployeeDialog = false;
    this.chosenEmployee = new Employee(
      '1',
      'name',
      'MALE',
      '2017-12-22',
      'schoolId',
      '39232323301222212',
      '本科',
      '华侨大学',
      '数字共亨阿',
      '18850337784',
      'yjh2332@163.com',
      '阿斯兰的回复',
      '1998222222',
      '福建省厦门市思明区护理达到118好理达到118好理达到118好',
      '好人啊 好人啊',
    );
    this.employees = [
      new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),
      new Employee(
        '1',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),
      new Employee(
        '2',
        'name',
        'MALE',
        '2017-12-22',
        'schoolId',
        'idCard',
        'education',
        '福建省华侨大学',
        'specialty',
        'phone',
        'email',
        'clamantName',
        'clamantPhone',
        'address',
        'remark',
      ),
      new Employee(
        '3',
        'name',
        'MALE',
        '2016-12-22',
        'schoolId',
        'idCard',
        'education',
        'graduationSchool',
        'specialty',
        'phone',
        'email',
        'clamantName',
        'clamantPhone',
        'address',
        'remark',
      )
    ]
  }

  onRowSelect(event) {
    alert(1);
  }

  showAdderDialog() {

  }

  deleteEmployee() {

  }

  saveEditedEmployee() {

  }

}
