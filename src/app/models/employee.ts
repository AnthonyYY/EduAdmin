export class Employee {
  constructor(
    public id: string,
    public name: string,
    public sex: 'MALE' | 'FEMALE',
    public birthday: any,
    public schoolId: string,
    public idCard: string,
    public education: string,
    public graduationSchool: string,
    public specialty: string,
    public phone: string,
    public email: string,
    public clamantName: string,
    public clamantPhone: string,
    public address: string,
    public remark: string,
    public createTime?: Date,
    public updatedTime?: Date,
    public deleted?: boolean,
  ) {}
}
