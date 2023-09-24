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

## Autor

Brando Javier Carquin Mendocilla

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

## Notas adicionales
El servicio de genaración de token cumple la funcionalidad de generar un token y eliminarlo dinamicamente de la bd no relacional MongoDB durante 15 min