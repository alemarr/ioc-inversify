interface DatabaseStorage {
  insert(data: any): any;
  fetchAll(): any[];
}

export default DatabaseStorage;