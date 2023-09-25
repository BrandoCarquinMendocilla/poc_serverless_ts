import { loadFeature, defineFeature } from 'jest-cucumber';
import { handler } from '../../src/TokenCard'
import * as MongoDB from '../../src/service/MongoService';
import * as MysqlDb from '../../src/service/MysqlService';
import { payload } from '../common/Event'
const feature = loadFeature('../TokenCard.feature', {
    loadRelativePath: true,
    errors: true
});

defineFeature(feature, (test) => {

    test('Servicio de validación de Tarjetas con generación de token', ({ given, and, when, then }) => {
        let response: any, event: any;
        given(/^Se ingresa en el body la información de la tarjeta$/, () => {
            event = payload(JSON.stringify({
                "expiration_month": "05",
                "email": "brando@gmail.com",
                "expiration_year": "2026",
                "cvv": "123",
                "card_number": "4551038360146356" // MasterCard
            }));
        });

        and('se verifica la información enviada en mysql y se registra la información enviada adicionando su token mongodb', () => {
            jest.spyOn(MysqlDb, 'buscarTarjeta').mockImplementation(() => Promise.resolve(true));
            jest.spyOn(MongoDB, 'registrarToken').mockImplementation(() => Promise.resolve({
                statusCode: 200,
                body: ''
            }));
            
        });

        when('Ejecutamos el Lambda TokenCard', async () => {
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(200);
        });
    });



    test('Bad Request - Servicio de validación de Tarjetas con generación de token', ({ when, then }) => {
        let response: any;
        when('Ejecutamos el Lambda TokenCard', async () => {
            const event = payload(JSON.stringify({
                "expiration_month": "05",
                "email": "brando@gmil.com",
                "expiration_year": "2026",
                "cvv": "123",
                "card_number": "4551038360146356"// Visa
            }));
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(404);
        });
    });

    test('Bad Request CVV incorrecto - Servicio de validación de Tarjetas con generación de token', ({ when, then }) => {
        let response: any;
        when('Ejecutamos el Lambda TokenCard', async () => {
            const event = payload(JSON.stringify({
                "expiration_month": "05",
                "email": "brando@gmail.com",
                "expiration_year": "2026",
                "cvv": "1234",
                "card_number": "4551038360146356"
            }));
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(404);
        });
    });

    test('Error Service MongoDb - Servicio de validación de Tarjetas con generación de token', ({ and, when, then }) => {
        let response: any;
        and('se presenta un error en el server de MongoDB', () => {
            jest.spyOn(MysqlDb, 'buscarTarjeta').mockImplementation(() => Promise.resolve(true));
            jest.spyOn(MongoDB, 'registrarToken').mockRejectedValue(new Error('Simulated error'));
        });
        when('Ejecutamos el Lambda TokenCard', async () => {
            const event = payload(JSON.stringify({
                "expiration_month": "05",
                "email": "brando@gmail.com",
                "expiration_year": "2026",
                "cvv": "123",
                "card_number": "4551038360146356"
            }));

            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(404);
        });
    });

    test('Servicio de validación de Tarjetas Amex con generación de token', ({ given, and, when, then }) => {
        let response: any, event: any;
        given(/^Se ingresa en el body la información de la tarjeta$/, () => {
            event = payload(JSON.stringify({
                "expiration_month": "05",
                "email": "brando@gmail.com",
                "expiration_year": "2026",
                "cvv": "123",
                "card_number": "4551038360146356" // Amex
            }));
        });

        and('se verifica la información enviada en mysql y se registra la información enviada adicionando su token mongodb', () => {
            jest.spyOn(MongoDB, 'registrarToken').mockImplementation(() => Promise.resolve({
                statusCode: 200,
                body: ''
            }));
        });

        when('Ejecutamos el Lambda TokenCard', async () => {
            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(200);
        });
    });

    test('Error Service Mysql - Servicio de validación de Tarjetas con generación de token', ({ and, when, then }) => {
        let response: any;
        and('se presenta un error en el server de Mysql', () => {
            jest.spyOn(MysqlDb, 'buscarTarjeta').mockImplementation(() => Promise.resolve(false));
        });
        when('Ejecutamos el Lambda TokenCard', async () => {
            const event = payload(JSON.stringify({
                "expiration_month": "05",
                "email": "brando@gmail.com",
                "expiration_year": "2026",
                "cvv": "123",
                "card_number": "4551038360146356"
            }));

            response = await handler(event, null, null)
        });

        then('Mostramos la respuesta', () => {
            expect(response.statusCode).toBe(404);
        });
    });
});
