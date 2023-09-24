import { CONSTANTS } from '../../common/constant/ErrorConstant';
import { CONSTANTS_CARD } from '../constant/CardConstant';
import * as Joi from 'joi';

export const validateCardRequest = async (data: any) => {
    const schema = Joi.object({
        expiration_month: Joi.string().min(1).max(12).required(),
        card_number: Joi.string().min(13).max(16).required(),
        email: Joi.string()
            .email()
            .min(5)
            .max(100)
            .required()
            .custom((value, helpers) => {
                const domain = value.split('@')[1];
                if (CONSTANTS_CARD.DOMINIO_VALID_EMAIL.includes(domain)) {
                    return value; 
                } else {
                    return helpers.error(`Dominio no permitido, ingrese: [${CONSTANTS_CARD.DOMINIO_VALID_EMAIL}]`);
                }
            }, 'custom-validation'),
        expiration_year: Joi.string().min(4).max(4).required(),
        cvv: Joi.string().required().min(3).max(4)
    });
    try {
        await schema.validateAsync(data, {
            abortEarly: false
        });
        return {
            statusCode: CONSTANTS.CODE.OK
        };
    } catch (error) {
        console.error(error)
        const detallesErrores = error.details.map((detalle: any) => detalle.message);
        return {
            statusCode: CONSTANTS.CODE.BAD_REQUEST,
            detallesErrores
        };
    }
};
