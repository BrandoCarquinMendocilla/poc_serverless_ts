import * as fs from 'fs';


export const getRequest = (responseName: string) => {
  const filePath = `test/request/${responseName}.json`;
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } else {
      console.error(`El archivo ${filePath} no existe.`);
      return null;
    }
  } catch (error) {
    // Maneja los errores si ocurre algún problema al leer el archivo
    console.error(`Error al leer el archivo ${filePath}: ${error.message}`);
    return null;
  }
};
