import { Component } from '@angular/core';
import { MongoDBService } from '../../../service/MongoDB-service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor(private mongodbService: MongoDBService) {}

  async createDocument(): Promise<void> {
    try {
      const collection = this.mongodbService.getCollection('myCollection');
      const result = await collection.insertOne({ name: 'John', age: 30 });
      console.log('Document created:', result.insertedId);
    } catch (error) {
      console.error('Failed to create document', error);
    }
  }

  async readDocuments(): Promise<void> {
    try {
      const collection = this.mongodbService.getCollection('myCollection');
      const documents = await collection.find().toArray();
      console.log('Documents:', documents);
    } catch (error) {
      console.error('Failed to read documents', error);
    }
  }

  async updateDocument(): Promise<void> {
    try {
      const collection = this.mongodbService.getCollection('myCollection');
      const result = await collection.updateOne({ name: 'John' }, { $set: { age: 35 } });
      console.log('Document updated:', result.modifiedCount);
    } catch (error) {
      console.error('Failed to update document', error);
    }
  }

  async deleteDocument(): Promise<void> {
    try {
      const collection = this.mongodbService.getCollection('myCollection');
      const result = await collection.deleteOne({ name: 'John' });
      console.log('Document deleted:', result.deletedCount);
    } catch (error) {
      console.error('Failed to delete document', error);
    }
  }
  check: boolean = true;
  checkInput: boolean = false;
  checkSelect: boolean = false;

  selectAnmelden() {
    this.check = false;
    this.checkSelect = true;
    this.checkInput = true;

  }

  selectRegistrieren() {
    this.check = false;
    this.checkSelect = true;
    this.checkInput = false;
  }
}