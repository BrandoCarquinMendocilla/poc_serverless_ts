import { validateCardRequest } from './valid/TokenCardValidate';
import { generateRandomToken } from '../common/GenerateToken';
import { validarLuhn, validateCardType } from './support/CardSupport';
import { CONSTANTS_CARD } from './constant/CardConstant';
import { CONSTANTS } from '../common/constant/ErrorConstant';
import { registrarToken } from './service/MongoService';

export const handler: any = async (event: any) => {
    if (event.body !== undefined && event.body !== null) {
        const requestData = JSON.parse(event.body);
        const validate = await validateCardRequest(requestData);
        if (validate.statusCode === CONSTANTS.CODE.BAD_REQUEST) {
            return {
                statusCode: CONSTANTS.CODE.BAD_REQUEST,
                body: JSON.stringify({
                    details: validate.detallesErrores,
                    message: CONSTANTS.PAYLOAD_ERROR
                })
            };
        }
        const validLuhn = validarLuhn(requestData.card_number);
        if(!validLuhn){
            return {
                statusCode: CONSTANTS.CODE.BAD_REQUEST,
                body: JSON.stringify({
                    error: {
                        code: CONSTANTS.CODE.BAD_REQUEST,
                        message: 'La tarjeta ingresa no cumple con la valdiacion Luhn'
                    }
                })
            };
        }

        const validateCVV = validateCardType(requestData.card_number, requestData.cvv);
        if (!validateCVV) {
            return {
                statusCode: CONSTANTS.CODE.BAD_REQUEST,
                body: JSON.stringify({
                    error: {
                        code: CONSTANTS.CODE.BAD_REQUEST,
                        message: CONSTANTS_CARD.VALID_CARD
                    }
                })
            };
        }
        const token = generateRandomToken(16);

        try {
            return await registrarToken(requestData, token);
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
};
