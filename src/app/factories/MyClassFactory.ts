import fs from 'fs';
import path from 'path';

class MyClassFactory {
  // Objeto donde se almacenarán las clases registradas
  static registeredClasses: Record<string, any> = {};

  // Cargar los módulos y registrar las clases
  static async loadModule(addonName: string) {
    try {
      // Importar el archivo barrel del addon
      const addon = await import(`@/app/extra-addons/${addonName}/index`);

      // Aquí puedes acceder a todas las clases de ese addon
      console.log('Addon loaded:', addon);
      return addon; // Retorna todas las clases exportadas
    } catch (error) {
      console.error('Error loading addon:', error);
      throw new Error('Addon not found');
    }
  }

  // Obtener una clase registrada por nombre
  static getClass(className: string): any {
    return this.registeredClasses[className];
  }

  // Crear una instancia de la clase registrada
  static createClassInstance(className: string, ...args: any[]): any {
    const ClassConstructor = this.getClass(className);
    if (ClassConstructor) {
      return new ClassConstructor(...args);
    } else {
      throw new Error(`Class ${className} not found.`);
    }
  }
}

export default MyClassFactory;