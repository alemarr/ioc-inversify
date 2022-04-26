import { injectable, inject } from 'inversify';

import DatabaseStorage from '../database/database-storage';
import Post from '../../domain/entities/post';
import PostRepositoryInterface from "../../domain/repositories/post-repostitory";
import TYPES from '../../application/constants/types';

@injectable()
class PostRepository<T extends Post> implements PostRepositoryInterface<Post> {
  constructor(@inject(TYPES.DatabaseStorage) private readonly _db: DatabaseStorage) { }

  save(post: T): Post {
    const record = this._db.insert({
      title: post.getTitle(),
      description: post.getDescription()
    });
    return new Post(record.title, record.description, record.id);
  }

  getPosts(): Post[] {
    const posts = this._db.fetchAll();
    return posts.map(post => {
      return new Post(post.title, post.description, post.id);
    });
  }
}

export default PostRepository;