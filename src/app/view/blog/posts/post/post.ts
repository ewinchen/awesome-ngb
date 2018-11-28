export class Post {
  constructor(
    public title: string,
    public content: string,
    public tag: Array<string>,
    public createAt: Date,
    public lastModifiedAt: Date) {
  }
}

