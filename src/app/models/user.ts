export class User {
  constructor(
    public schoolId: string,
    public name: string,
    public userType: 'EMPLOYEE',
    public entityId: string,
    public phone: string,
    public username: string,
    public password: string,
    public salt: string,
    public roleId?: string,
    public lastLoginIp?: string,
    public lastLoginTime?: string,
    public createTime?: Date,
    public updateTime?: Date,
    public deleted?: boolean,
  ) {}
}
