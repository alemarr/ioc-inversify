class Post {
  private _id: number | undefined;
  private _title: string;
  private _description: string;

  constructor(title: string, description: string, id?: number){
    this._title = title;
    this._description = description;
    this._id = id;
  }

  public getId(): number|undefined {
    return this._id;
  }

  public getTitle(): string {
    return this._title;
  }

  public getDescription(): string {
    return this._description;
  }
}

export default Post;