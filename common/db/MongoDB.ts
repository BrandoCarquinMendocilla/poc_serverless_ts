import { MongoClient } from 'mongodb';


export class connectToDatabase {
    public async connectMongo(){
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        const connectPromise = client.connect();
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Tiempo de conexión excedido')), 500)
        );
    
        try {
            await Promise.race([connectPromise, timeoutPromise]);
            const db = client.db('poc_ts_serverless');
            return db;
        } catch (error) {
            console.error('Error MongoDB:', error);
            return null;
        }
    }   
};

