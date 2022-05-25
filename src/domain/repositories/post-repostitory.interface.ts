import Post from '../entities/post';
import RepositoryInterface from './repository.interface';

export default interface PostRepositoryInterface<T extends Post> extends RepositoryInterface<T> {
  getPosts(): T[];
}