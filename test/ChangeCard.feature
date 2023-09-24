Feature: Validación de Token - envio de data guardada

  Scenario: Servicio de validación de Tarjetas con generación de token
    Given Se ingresa en el authorization el Bearer token
    And se verifica la información enviada en mongodb
    When Ejecutamos el Lambda ChangeCard
    Then Mostramos la respuesta


  Scenario: Error Service MongoDb - Servicio de validación de Tarjetas con generación de token
    And se presenta un error en el server de MongoDB
    When Ejecutamos el Lambda ChangeCard
    Then Mostramos la respuesta

  Scenario: Bad Request - Servicio de validación de Tarjetas con generación de token
    When Ejecutamos el Lambda ChangeCard
    Then Mostramos la respuesta
