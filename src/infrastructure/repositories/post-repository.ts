import { injectable, inject } from 'inversify';

import Post from '../../domain/entities/post';
import PostRepositoryInterface from "../../domain/repositories/post-repostitory.interface";
import TYPES from '../../application/constants/types';
import DatabaseStorageInterface from "../database/database-storage.interface";

@injectable()
export default class PostRepository<T extends Post> implements PostRepositoryInterface<Post> {
  constructor(@inject(TYPES.DatabaseStorage) private readonly _db: DatabaseStorageInterface) { }

  save(post: T): Post {
    const record = this._db.insert({
      title: post.getTitle(),
      description: post.getDescription()
    });
    return new Post(record.title, record.description, record.id);
  }

  getPosts(): Post[] {
    const posts = this._db.fetchAll();
    return posts.map((post: { title: string, description:string, id: number}) => {
      return new Post(post.title, post.description, post.id);
    });
  }
}