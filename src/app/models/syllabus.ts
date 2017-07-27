export class Syllabus {
  constructor(
    public schoolId: number,
    public name: string,
    public type: 'ONETOONE' | 'BOUTIQUEGROUP' | 'NORMALGROUP',
    public studentNum: number,
    public price: number,
    public id?: number,
    public backNum?: number,
    public createTime?: Date,
    public updateTime?: Date,
    public deleted?: boolean,
  ) {}
}
