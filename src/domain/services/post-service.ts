import { inject, injectable } from 'inversify';

import PostServiceInterface from './post-service.interface';
import Post from '../entities/post';
import PostRepositoryInterface from '../repositories/post-repostitory';
import TYPES from '../../application/constants/types';
import LoggerInterface from "../../infrastructure/services/logger/logger.interface";

@injectable()
class PostService implements PostServiceInterface {
  constructor(
      @inject(TYPES.PostRepository) private _repository: PostRepositoryInterface<Post>,
      @inject(TYPES.Logger) private _logger: LoggerInterface
  ) { }

  getPosts(): Post[] {
    const posts = this._repository.getPosts();
    return posts;
  }

  create(title: string, description: string): Post {
    const post = this._repository.save(new Post(title, description));

    this._logger.info(`[PostService] Created new post with id ${ post.getId() }`);

    return post;
  }
}

export default PostService;