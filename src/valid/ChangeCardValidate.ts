import { CONSTANTS } from '../../common/constant/ErrorConstant'; 
import Joi from 'joi';

export const validateToken = async (data: any) => {
    const schema = Joi.object({
        token: Joi.string().pattern(/^[A-Za-z0-9]{16}$/).required()
    });
    try {
        await schema.validateAsync(data, {
            abortEarly: false
        });
        
        return {
            statusCode: CONSTANTS.CODE.OK
        };
    } catch (error) {
        console.log(error)
        const detallesErrores = CONSTANTS.TOKEN_INVALID;
        return {
            statusCode: CONSTANTS.CODE.BAD_REQUEST,
            detallesErrores
        };
    }
};
