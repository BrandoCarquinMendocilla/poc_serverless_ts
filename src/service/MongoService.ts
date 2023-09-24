import { CONSTANTS } from "../../common/constant/ErrorConstant";
import { connectToDatabase } from "../../common/db/MongoDB";
import { CONSTANTS_CARD } from "../constant/CardConstant";

export const registrarToken = async (requestData, token) => {
    const cn = new connectToDatabase;
    const db = await cn.connectMongo();
    console.log(db);

    if (db) {
        const collection = db.collection('tokens');
        const ttlSeconds = 900;
        const expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + ttlSeconds);
        console.log(expirationDate)
        const payloadSave = { ...requestData };
        delete payloadSave.cvv;
        const documento = {
            token,
            createdAt: new Date(),
            expirationDate,
            ...payloadSave,
        };
        collection.createIndex({ "expirationDate": 1 }, { expireAfterSeconds: 0 });
        await collection.insertOne(documento);
        return {
            statusCode: CONSTANTS.CODE.OK,
            body: JSON.stringify({
                code: CONSTANTS.CODE.OK,
                token,
                message: CONSTANTS_CARD.TOKEN_GENERATE
            })
        };
    } else {
        return {
            statusCode: CONSTANTS.CODE.BAD_REQUEST,
            body: JSON.stringify({
                error: {
                    code: CONSTANTS.CODE.BAD_REQUEST,
                    message: CONSTANTS.ERROR_BD
                }
            })
        };
    }
};

export const buscarToken = async (query: Object) => {
    const cn = new connectToDatabase;
    const db = await cn.connectMongo();
    if (db) {
        const collection = db.collection('tokens');
        const cursor = collection.find(query);
        const result =  await cursor.toArray()        

        if (result.length > 0) {
            return {
                statusCode: CONSTANTS.CODE.OK,
                body: JSON.stringify({
                    code: CONSTANTS.CODE.OK,
                    result,
                    message: CONSTANTS_CARD.TOKEN_FIND
                })
            };
        }
    
        return {
            statusCode: CONSTANTS.CODE.FORBIDDEN,
            body: JSON.stringify({
                code: CONSTANTS.CODE.FORBIDDEN,
                message: CONSTANTS.FORBIDDEN_MESSAGE
            })
        };

    } else {
        return {
            statusCode: CONSTANTS.CODE.BAD_REQUEST,
            body: JSON.stringify({
                error: {
                    code: CONSTANTS.CODE.BAD_REQUEST,
                    message: CONSTANTS.ERROR_BD
                }
            })
        };
    }
};

