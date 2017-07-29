export class Syllabus {
  constructor(
    public name: string,
    public type: 'ONETOONE' | 'BOUTIQUEGROUP' | 'NORMALGROUP',
    public price: number,
    public id?: number,
    public studentNum?: number,
    public schoolId?: number,
    public backNum?: number,
    public createTime?: Date,
    public updateTime?: Date,
    public deleted?: boolean,
  ) {}
}
