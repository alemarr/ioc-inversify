export default interface DatabaseStorageInterface {
  insert(data: any): any;
  fetchAll(): any[];
}