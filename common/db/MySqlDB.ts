import * as mysql from 'mysql2/promise';

const Connection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'mysql',
            database: 'poc_ts',
            connectionLimit: 10,
        });

        return connection;
    } catch (error) {
        console.error('Error al configurar la conexión:', error);
        throw error;
    }
};

export const connection = Connection();