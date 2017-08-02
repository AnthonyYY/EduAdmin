import { Component, OnInit } from '@angular/core';
import {School} from "../models/school";
import {ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.less']
})
export class SchoolComponent implements OnInit {

  schools:Array<School>;
  chosenSchool: School;
  selectionSchool: School;
  showSchoolDialog: boolean;
  visibleRows: number;
  constructor() { }

  ngOnInit() {
    this.showSchoolDialog = false;
    this.chosenSchool = new School('Anthony','多少空间裂缝你卡的废话你啦还是；的历史开奖记录啊啥都放假了','2','1');
    this.visibleRows = 16;
    this.schools = [
      new School('Anthony','多少空间裂缝你卡的废话你啦还是；的历史开奖记录啊啥都放假了','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','撒旦撒大大开发了；','2','1'),
      new School('Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了','2','1'),
      new School('Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了','2','1'),
      new School('Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了','2','1')
    ]
  }

  openSchoolDialog(school): void{
    this.selectionSchool = school;
    this.chosenSchool = {...school};
    this.showSchoolDialog = true;
  }

  saveEditedSchool():void{
    if(this.chosenSchool.id){
      const index = this.findChosenSchoolIndex();
      this.schools[index] = this.chosenSchool;
    }else{
      this.chosenSchool.id = '22';
      this.schools.unshift(this.chosenSchool);
    }
    this.schools = [...this.schools];
    this.showSchoolDialog = false;
  }

  findChosenSchoolIndex(): number{
    return this.schools.indexOf(this.selectionSchool);
  }

  showAdderDialog():void{
    this.chosenSchool = new School('','','');
    this.showSchoolDialog = true;
  }
}
