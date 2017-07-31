import { Component, OnInit } from '@angular/core';
import {Employee} from "../models/employee";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  visibleRows: number;
  employees: Array<Employee>;
  selectedEmployee: Employee;
  chosenEmployee: Employee;
  showEmployeeDialog: boolean;
  genders: Array<{label: string,value: string}>;
  constructor() { }

  ngOnInit() {
    this.genders = [{label: '全部',value: ''},{label: '男',value: 'MALE'} ,{label: '女',value: 'FEMALE'}];
    this.showEmployeeDialog = false;
    this.visibleRows = 12;
    this.chosenEmployee = new Employee(
      'name',
      'MALE',
      '2017-12-22',
      '39232323301222212',
      '本科',
      '华侨大学',
      '数字共亨阿',
      '18850337784',
      'yjh2332@163.com',
      '阿斯兰的回复',
      'schoolId',
      '1',
      '1998222222',
      '福建省厦门市思明区护理达到118好理达到118好理达到118好',
      '好人啊 好人啊',
    );

    this.employees = [
      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),
      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

      new Employee(
        'name',
        'MALE',
        '2017-12-22',
        '39232323301222212',
        '本科',
        '华侨大学',
        '数字共亨阿',
        '18850337784',
        'yjh2332@163.com',
        '阿斯兰的回复',
        'schoolId',
        '1',
        '1998222222',
        '福建省厦门市思明区护理达到118好理达到118好理达到118好',
        '好人啊 好人啊',
      ),

    ]
  }

  onRowSelect(event) {
    this.showEmployeeDialog = true;
  }

  showAdderDialog() {
    this.chosenEmployee = new Employee(
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
      '',
    );
    this.showEmployeeDialog = true;
  }

  deleteEmployee() {

  }

  saveEditedEmployee() {

  }

  findChosenEmployeeIndex(): number{
    return this.employees.indexOf(this.chosenEmployee);
  }

}
