export class School {
  constructor(
    public name: string,
    public remark: string,
    public id?: string,
    public createTime?: string,
    public updateTime?: string,
    public deleted?: boolean,
  ) {}
}
