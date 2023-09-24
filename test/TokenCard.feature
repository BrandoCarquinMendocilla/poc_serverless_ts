Feature: Validación de Tarjetas de Crédito/Débito MasterCard - Visa - Amex

  Scenario: Servicio de validación de Tarjetas con generación de token
    Given Se ingresa en el body la información de la tarjeta
    And se verifica la información enviada en mysql y se registra la información enviada adicionando su token mongodb
    When Ejecutamos el Lambda TokenCard
    Then Mostramos la respuesta

  Scenario: Bad Request - Servicio de validación de Tarjetas con generación de token
    When Ejecutamos el Lambda TokenCard
    Then Mostramos la respuesta

  Scenario: Bad Request CVV incorrecto - Servicio de validación de Tarjetas con generación de token
    When Ejecutamos el Lambda TokenCard
    Then Mostramos la respuesta

  Scenario: Error Service MongoDb - Servicio de validación de Tarjetas con generación de token
    And se presenta un error en el server de MongoDB
    When Ejecutamos el Lambda TokenCard
    Then Mostramos la respuesta

  Scenario: Servicio de validación de Tarjetas Amex con generación de token
    Given Se ingresa en el body la información de la tarjeta
    And se verifica la información enviada en mysql y se registra la información enviada adicionando su token mongodb
    When Ejecutamos el Lambda TokenCard
    Then Mostramos la respuesta