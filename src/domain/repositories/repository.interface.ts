export default interface RepositoryInterface<T> {
  save(entity: T): T;
}