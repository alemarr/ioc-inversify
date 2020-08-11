import { injectable } from 'inversify';

import DatabaseStorage from '../../domain/database/database-storage';

@injectable()
class MemoryStorage implements DatabaseStorage {
  private _storage: any[];
  
  constructor() {
    this._storage = [];
  }

  insert(data: any): any {
    const newId = this._storage.length + 1;
    const record = {
      id: newId,
      ...data
    };
    this._storage.push(record);
    return record;
  }

  fetchAll(): any[] {
    return this._storage;
  }
}

export default MemoryStorage;