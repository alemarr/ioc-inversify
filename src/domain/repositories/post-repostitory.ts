import Post from '../entities/post';
import RepositoryInterface from './repository';

interface PostRepositoryInterface<T extends Post> extends RepositoryInterface<T> {
  getPosts(): T[];
}

export default PostRepositoryInterface;