import { MongoClientOptions } from 'mongodb';

export const environment = {
  production: true,
  mongodb: {
    url: 'mongodb+srv://chaguytsawo50:tsawochaguy50@cluster0.7r7kqbg.mongodb.net',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
      replicaSet: 'Cluster0-shard-0',
      retryWrites: true,
      w: 'majority'
    } as MongoClientOptions
  }
};
