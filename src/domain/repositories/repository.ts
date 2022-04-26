interface RepositoryInterface<T> {
  save(entity: T): T;
}

export default RepositoryInterface;