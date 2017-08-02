export class User {
  constructor(
    public name: string,
    public userType: 'EMPLOYEE',
    public entityId: string,
    public phone: string,
    public username: string,
    public password: string,
    public roleId: string,
    public lastLoginIp: string,
    public lastLoginTime: string,
    public id: string,
    public schoolId?: string,
    public salt?: string,
    public createTime?: Date,
    public updateTime?: Date,
    public deleted?: boolean,
  ) {}
}
