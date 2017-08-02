import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {Gender} from "../models/gender";
import {Subject} from "../models/subject";
import {Grade} from "../models/grade";
import {ConfirmationService} from "primeng/primeng";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  selectedUser: User;
  chosenUser: User;
  visibleRows: number;
  users: Array<User>;
  showUserDialog: boolean;
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
    this.showUserDialog = false;
    this.chosenUser = new User(
      'string',
      'EMPLOYEE',
      'string',
      'string',
      'string',
      'string',
      'string',
      'string',
      'string',
      'string',
      'string',
      'string',
    );
    this.users = [
      new User(
        'string',
        'EMPLOYEE',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
      ),
      new User(
        'string',
        'EMPLOYEE',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
      ),
      new User(
        'string',
        'EMPLOYEE',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
      )
    ]
  }

  onRowSelect(): void {
    this.chosenUser = {...this.selectedUser};
    this.showUserDialog = true;
  }

  deleteUser(studentName):void {
    this.confirmationService.confirm({
      message: `确定删除[${studentName}]员工信息`,
      accept: () => {
        const toDeleteUserIndex = this.findChosenUserIndex();
        this.users.splice(toDeleteUserIndex,1);
        this.users = [...this.users];
        this.showUserDialog = false;
      }
    })
  }

  saveEditedUser():void {
    if(this.chosenUser.id){
      const toSaveUserIndex = this.findChosenUserIndex();
      this.users[toSaveUserIndex] = this.chosenUser;
    }else{
      this.users.unshift(this.chosenUser);
    }
    this.users = [...this.users];
    this.showUserDialog= false;
  };

  showAdderDialog():void {
    this.chosenUser = new User(
      '',
      'EMPLOYEE',
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
    this.showUserDialog = true;
  }

  findChosenUserIndex():number{
    return this.users.indexOf(this.selectedUser);
  }

}
