import { inject, injectable } from 'inversify';

import PostServiceInterface from '../../domain/services/post-service';
import Post from '../../domain/entities/post';
import PostRepositoryInterface from '../../domain/repositories/post-repostitory';
import TYPES from '../../container/types';

@injectable()
class PostService implements PostServiceInterface {
  constructor(@inject(TYPES.PostRepository) private _repository: PostRepositoryInterface<Post>) { }

  getPosts(): Post[] {
    const posts = this._repository.getPosts();
    return posts;
  }

  create(title: string, description: string): Post {
    const post = new Post(title, description);
    return this._repository.save(post);
  }
}

export default PostService;