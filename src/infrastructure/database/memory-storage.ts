import { injectable } from 'inversify';

import DatabaseStorageInterface from "./database-storage.interface";

@injectable()
export default class MemoryStorage implements DatabaseStorageInterface {
  private readonly _storage: any[];
  
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