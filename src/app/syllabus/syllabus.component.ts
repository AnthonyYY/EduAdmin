import { Component, OnInit } from '@angular/core';
import {Syllabus} from "../models/syllabus";

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.less']
})
export class SyllabusComponent implements OnInit {

  syllabuses: Array<Syllabus>;
  constructor() {}

  ngOnInit() {
    this.syllabuses = [
      new Syllabus(1,'哦阿斯蒂芬','ONETOONE',1,120,12,23, new Date(),new Date(),false),
      new Syllabus(2,'精品课a程','NORMALGROUP',1,240,12,12, new Date(),new Date(),false),
      new Syllabus(3,'精品d课程','NORMALGROUP',1,22,12,12, new Date(),new Date(),false),
      new Syllabus(4,'精品sd课程','NORMALGROUP',1,240,12,12, new Date(),new Date(),false),
      new Syllabus(5,'精品课ds程','NORMALGROUP',1,440,12,12, new Date(),new Date(),false),
      new Syllabus(20,'精品d课程','NORMALGROUP',1,540,12,12, new Date(),new Date(),false),
      new Syllabus(21,'精品课sd程','NORMALGROUP',1,340,12,12, new Date(),new Date(),false),
      new Syllabus(22,'精品s课程','NORMALGROUP',1,240,12,12, new Date(),new Date(),false),
      new Syllabus(22,'精品s课程','NORMALGROUP',1,240,12,12, new Date(),new Date(),false),
      new Syllabus(22,'精品s课程','NORMALGROUP',1,240,12,12, new Date(),new Date(),false),
      new Syllabus(23,'精s品课程','NORMALGROUP',1,240,12,12)
    ]
  }

  showDialogToAdd() {

  }

}
