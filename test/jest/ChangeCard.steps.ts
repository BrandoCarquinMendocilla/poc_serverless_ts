import { loadFeature, defineFeature } from 'jest-cucumber';
import { handler } from '../../src/ChangeCard'
import * as MongoDB from '../../src/service/MongoService';
import { headers } from '../common/Event'
const feature = loadFeature('../ChangeCard.feature', {
    loadRelativePath: true,
    errors: true
});

defineFeature(feature, (test) => {
    test('Servicio de validación de Tarjetas con generación de token', ({ given, and, when, then }) => {
        let response: any, event: any;
        given(/^Se ingresa en el authorization el Bearer token$/, () => {
            event = headers('LMYsVZHjMSoSTiYr');
        });

        and('se verifica la información enviada en mongodb', () => {
            jest.spyOn(MongoDB, 'buscarToken').mockImplementation(() => Promise.resolve({
                statusCode: 200,
                body: ''
            }));
        });

        when('Ejecutamos el Lambda ChangeCard', async () => {
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(200);
        });
    });

    test('Error Service MongoDb - Servicio de validación de Tarjetas con generación de token', ({ and, when, then }) => {
        let response: any;
        and('se presenta un error en el server de MongoDB', () => {
            jest.spyOn(MongoDB, 'buscarToken').mockRejectedValue(new Error('Simulated error'));
        });
        when('Ejecutamos el Lambda ChangeCard', async () => {
            const event = headers('LMYsVZHjMSoSTiYr');
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(404);
        });
    });

    test('Bad Request - Servicio de validación de Tarjetas con generación de token', ({ when, then }) => {
        let response: any;
        when('Ejecutamos el Lambda ChangeCard', async () => {
            const event = headers('');
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(404);
        });
    });
});
