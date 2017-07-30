import { Component, OnInit } from '@angular/core';
import {Syllabus} from "../models/syllabus";
import {ConfirmationService} from 'primeng/primeng';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.less']
})
export class SyllabusComponent implements OnInit {

  tableVisibleRows: number;
  syllabuses: Array<Syllabus>;
  chosenSyllabus: Syllabus;
  selectedSyllabus: Syllabus;
  syllabusTypes = [{label: '一对一课程',value:'ONETOONE'},{label: '精品小组',value:'BOUTIQUEGROUP'},{label: '常规班',value:'NORMALGROUP'}];
  showSyllabusDialog: boolean;
  keyword = new FormControl();

  constructor(private confirmService: ConfirmationService) {}

  ngOnInit() {
    this.tableVisibleRows = 10;
    this.syllabuses = [
      new Syllabus('哦阿斯蒂芬','ONETOONE',1,1,120,12,23, new Date(),new Date(),false),
      new Syllabus('萨瓦迪卡','ONETOONE',1,2,120,12,23, new Date(),new Date(),false),
      new Syllabus('么阻扰系','ONETOONE',1,3,120,12,23, new Date(),new Date(),false),
      new Syllabus('阿里嘎都','ONETOONE',1,4,120,12,23, new Date(),new Date(),false),
      new Syllabus('搜嘎','ONETOONE',1,5,120,12,23, new Date(),new Date(),false),
      new Syllabus('哦么的都','ONETOONE',1,6,120,12,23, new Date(),new Date(),false),
      new Syllabus('哈如','ONETOONE',1,7,120,12,23, new Date(),new Date(),false),
      new Syllabus('session','ONETOONE',1,8,120,12,23, new Date(),new Date(),false),
      new Syllabus('哇嘎立马说','ONETOONE',1,9,120,12,23, new Date(),new Date(),false),
      new Syllabus('搜的苏呢','ONETOONE',1,10,120,12,23, new Date(),new Date(),false),
      new Syllabus('阿斯蒂芬','ONETOONE',1,11,120,12,23, new Date(),new Date(),false)
    ];
    this.chosenSyllabus = new Syllabus('哦阿斯蒂芬','ONETOONE',1,1,120,12,23, new Date(),new Date(),false);
    this.showSyllabusDialog = false;

    this.keyword.valueChanges
      .debounceTime(300)
      .subscribe( newVal => {
        console.log(newVal);
        this.syllabuses = this.syllabuses.filter( syllabus => {
          return syllabus.name.indexOf(newVal) > -1;
        } )
    } )
  }

  onRowSelect(event):void {
    this.chosenSyllabus = {...event.data};
    this.showSyllabusDialog = true;
  }

  showAdderDialog():void {
    this.chosenSyllabus = {name: '',type: 'ONETOONE',price: 0};
    this.showSyllabusDialog = true;
  }

  saveEditedSyllabus(): void {
    if(this.chosenSyllabus.id) {
      const editedSyllabusIndex = this.findChosenSyllabusIndex();
      this.syllabuses[editedSyllabusIndex] = this.chosenSyllabus;
    } else {
      this.chosenSyllabus.id = 12;
      this.syllabuses.unshift(this.chosenSyllabus);
    }
    this.syllabuses = [...this.syllabuses];
    this.showSyllabusDialog = false;
  }

  deleteSyllabus(syllabusName): void {
    this.confirmService.confirm({
      message: '确定删除课程[' + syllabusName + ']',
      accept: () => {
        const editedSyllabusIndex = this.findChosenSyllabusIndex();
        if(editedSyllabusIndex >= 0) {
          this.syllabuses.splice(editedSyllabusIndex,1);
          this.syllabuses = [...this.syllabuses];
          this.showSyllabusDialog = false;
        }
      }
    });
  }

  findChosenSyllabusIndex(): number {
    return this.syllabuses.indexOf(this.selectedSyllabus);
  }
}
