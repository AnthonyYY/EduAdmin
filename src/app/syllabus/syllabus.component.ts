import { Component, OnInit } from '@angular/core';
import {Syllabus} from "../models/syllabus";

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.less']
})
export class SyllabusComponent implements OnInit {

  syllabuses: Array<Syllabus>;
  chosenSyllabus: Syllabus;
  newSyllabus: Syllabus;
  syllabusTypes = [{label: '一对一课程',value:'ONETOONE'},{label: '精品小组',value:'BOUTIQUEGROUP'},{label: '常规班',value:'NORMALGROUP'}];
  showEditDialog: boolean;
  showAdderDialog: boolean;
  constructor() {}

  ngOnInit() {
    this.syllabuses = [
      new Syllabus('哦阿斯蒂芬','ONETOONE',1,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',2,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',3,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',4,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',5,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',6,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',7,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',8,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',9,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',10,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦阿斯蒂芬','ONETOONE',11,1,120,12,23, new Date(),new Date(),false)
    ];
    this.chosenSyllabus = new Syllabus('哦阿斯蒂芬','ONETOONE',1,1,120,12,23, new Date(),new Date(),false);
    this.showEditDialog = false;
    this.showAdderDialog = false;
  }

  onRowSelect(data):void {
    this.showEditDialog = true;
  }
}
