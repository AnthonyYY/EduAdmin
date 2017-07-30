export class Student {
  constructor(
  public id: string,
  public schoolId: string,
  public name: string,
  public idCard: string,
  public sex: 'MALE' | 'FEMALE',
  public orignSchool: string,
  public grade: string,
  public birthday: Date,
  public subject: string,
  public source: string,
  public phone: string,
  public parentName: string,
  public parentSex: 'MALE' | 'FEMALE',
  public parentIdCard: string,
  public parentPhone: string,
  public address: string,
  public remark: string
  ) {}
}
