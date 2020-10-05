interface RepositoryInterface<T> {
  save(entitiy: T): T;
}

export default RepositoryInterface;