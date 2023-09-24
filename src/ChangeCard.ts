import { validateToken } from './valid/ChangeCardValidate';
import { CONSTANTS } from '../common/constant/ErrorConstant';
import { buscarToken } from './service/MongoService';
export const handler: any = async (event: any) => {
    const headers = event.headers;
    const token = headers['Authorization'];
    const match = token.match(/^Bearer\s([A-Za-z0-9_-]+)$/);
    const validate = await validateToken({ token: match ? match[1] : {} })
    if (validate.statusCode === CONSTANTS.CODE.BAD_REQUEST) return {
        statusCode: CONSTANTS.CODE.BAD_REQUEST,
        body: JSON.stringify({
            details: validate.detallesErrores,
            message: CONSTANTS.PAYLOAD_ERROR
        })
    };

    try {
        return await buscarToken({ token: match[1] });
    } catch (error) {
        return {
            statusCode: CONSTANTS.CODE.BAD_REQUEST,
            body: JSON.stringify({
                error: {
                    code: CONSTANTS.CODE.BAD_REQUEST,
                    details: error,
                    message: CONSTANTS.ERROR_BD
                }
            })
        };
    }

}
