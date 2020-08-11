interface RepositoryInterface<T> {
  getPosts(): T[];
  save(post: T): T;
}

export default RepositoryInterface;