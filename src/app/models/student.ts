export class Student {
  constructor(
  public name: string,
  public idCard: string,
  public sex: 'MALE' | 'FEMALE',
  public orignSchool: string,
  public grade: string,
  public birthday: string,
  public subject: string,
  public source: string,
  public phone: string,
  public parentName: string,
  public parentSex: 'MALE' | 'FEMALE',
  public parentIdCard: string,
  public parentPhone: string,
  public address: string,
  public remark: string,
  public id?: string,
  public schoolId?: string,
  public createTime?: string,
  public updateTime?: string,
  public deleted?: boolean,
  ) {}
}
