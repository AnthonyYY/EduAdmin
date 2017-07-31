export class Role {
  constructor(
    public id: string,
    public schoolId: string,
    public name: string,
    public remark: string,
    public deleted: boolean,
  ) {}
}
