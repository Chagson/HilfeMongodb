import { Injectable } from '@angular/core';
import { MongoClient, Db, Collection } from 'mongodb';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class MongoDBService {
  private db!: Db;

  constructor() {
    this.connect();
  }

  private async connect(): Promise<void> {
    try {
      const client = await MongoClient.connect(
        environment.mongodb.url,
        environment.mongodb.options
      );
      this.db = client.db();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }
  public getCollection(collectionName: string): Collection {
    return this.db.collection(collectionName);
  }

  // Implement your CRUD operations here
}