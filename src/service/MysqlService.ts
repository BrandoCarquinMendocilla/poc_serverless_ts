
import { connection } from "../../common/db/MySqlDB";

export const buscarTarjeta = async (cardNumber: string, cvv: string) => {
    try {
        const [rows, fields] = await (await connection).execute('CALL sp_buscar_tarjeta(?, ?)', [cardNumber, cvv]);
        let response = false;
        if (Array.isArray(rows[0]) && rows[0].length > 0) {
            response = true;
        }
        return response;
    } catch (error) {
        console.error('Error al buscar la tarjeta:', error);
        return false;
    }
}
