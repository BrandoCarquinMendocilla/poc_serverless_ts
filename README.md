# POC TypeScript Serverless

**Versión:** 1.0.0

Este proyecto es una prueba de concepto (POC) de una aplicación serverless escrita en TypeScript. La aplicación utiliza AWS Lambda y Serverless Framework para implementar servicios sin servidor.

## Requisitos previos

Asegúrate de tener instaladas las siguientes dependencias en tu entorno de desarrollo:

- Node.js
- npm (Administrador de paquetes de Node.js)
- Serverless Framework
- TypeScript

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

## Uso
## Ejecución local (modo desarrollo)
Puedes ejecutar la aplicación en tu entorno local utilizando Serverless Offline. Utiliza el siguiente comando:

```bash
npm run dev
```
Esto iniciará la aplicación en un entorno local para pruebas y desarrollo.

## Implementación en AWS Lambda
Para implementar la aplicación en AWS Lambda, utiliza el siguiente comando:

```bash
npm run deploy
```

Esto desplegará la aplicación en tu cuenta de AWS utilizando el servicio de Serverless Framework.

## Pruebas
Puedes ejecutar pruebas unitarias utilizando Jest. Ejecuta el siguiente comando:

```bash
npm test
```

## Dependencias
# DevDependencies
* @types/aws-lambda - Tipos TypeScript para AWS Lambda.
* @types/jest - Tipos TypeScript para Jest.
* cucumber - Biblioteca de pruebas BDD (Behavior-Driven Development).
* esbuild - Empaquetador y minificador de JavaScript/TypeScript extremadamente rápido.
* jest - Framework de pruebas unitarias para JavaScript/TypeScript.
* jest-cucumber - Integración de Cucumber con Jest para pruebas BDD en JavaScript/TypeScript.
* serverless - Framework para implementar aplicaciones sin servidor en AWS Lambda.
* serverless-esbuild - Plugin de Serverless Framework para empaquetar con esbuild.
* serverless-offline - Plugin de Serverless Framework para ejecutar funciones sin servidor de forma local.
* ts-jest - Integración de TypeScript con Jest para pruebas unitarias.
* ts-node - Ejecutor TypeScript en tiempo de ejecución.
* typescript - Lenguaje de programación TypeScript.

## Dependencies

* @types/joi - Tipos TypeScript para Joi, una biblioteca de validación de datos.
* joi - Biblioteca de validación de datos para Node.js.
* mongodb - Controlador oficial de MongoDB para Node.js.
* mongoose - ODM (Object Data Modeling) para MongoDB y Node.js.
* mysql2 - para Mysql y Node.js.

## Autor

Brando Javier Carquin Mendocilla

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

## Notas adicionales
# Base de Datos Mysql
-- Crear la tabla 'tarjetas' para almacenar información de tarjetas
```bash
CREATE TABLE tarjetas (
    card_number varchar(18) PRIMARY KEY NOT NULL,
    expiration_month VARCHAR(2) NOT NULL,
    email VARCHAR(100) NOT NULL,
    expiration_year VARCHAR(4) NOT NULL,
    cvv VARCHAR(4) NOT NULL
);
```
-- Definir un procedimiento almacenado 'sp_buscar_tarjeta' para buscar tarjetas por número de tarjeta y CVV
```bash
DELIMITER //
CREATE PROCEDURE sp_buscar_tarjeta(
    IN cardNumber VARCHAR(16),
    IN cvv VARCHAR(4)
)
BEGIN
    SELECT * FROM tarjetas
    WHERE card_number = cardNumber AND cvv = cvv;
END //
DELIMITER ;
```

-- Insertar una tarjeta de ejemplo en la tabla 'tarjetas'
```bash
INSERT INTO `poc_ts`.`tarjetas`
(`card_number`,
`expiration_month`,
`email`,
`expiration_year`,
`cvv`)
VALUES
('4551038360146356', '05', 'juan@gmail.com', '2026', '123');
```

# Base de Datos MongoDB

Este proyecto utiliza MongoDB como base de datos para almacenar y administrar datos. A continuación, se detallan los pasos para configurar y crear una tabla en MongoDB.

### Configuración

Asegúrate de tener MongoDB instalado en tu entorno de desarrollo. Puedes descargar MongoDB desde [el sitio web oficial de MongoDB](https://www.mongodb.com/try/download/community).

### Creación de una Colección (Tabla)

MongoDB utiliza colecciones en lugar de tablas para almacenar datos. Para crear una colección en MongoDB, puedes seguir estos pasos:

1. Inicia el servidor de MongoDB en tu máquina local si aún no está en funcionamiento. Utiliza el siguiente comando:

```bash
   mongod
```

Abre una terminal y conéctate a la instancia de MongoDB utilizando el cliente de MongoDB (mongo):

Crea una nueva base de datos (si aún no existe) o selecciona una base de datos existente donde deseas crear la colección. Por ejemplo, puedes crear una base de datos llamada "poc_ts_serverless" ejecutando:

```bash
   use poc_ts_serverless
```

Ahora puedes crear una colección en la base de datos. Por ejemplo, para crear una colección llamada "tokens", puedes ejecutar:

```bash
    db.createCollection("tokens")
```
Tu colección "tokens" ahora está lista para almacenar datos. Puedes comenzar a insertar, consultar y administrar datos en esta colección desde tu aplicación serverless.

## Referencias

Aquí encontrarás algunas fuentes útiles sobre la validación de tarjetas de crédito:

- [Wikipedia - Algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn): Información sobre el algoritmo de Luhn, utilizado para verificar números de tarjetas de crédito.

