export class Post implements PostStructure {
  constructor(
    public title: string,
    public content: string,
    public tag: Array<string>,
    public createAt: Date,
    public lastModifiedAt: Date) {
  }
}

export interface PostStructure {
  title: string;
  content: string;
  tag: Array<string>;
  createAt: Date;
  lastModifiedAt: Date;
}
