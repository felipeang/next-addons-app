// init.ts
import MyClassFactory from "@/app/factories/MyClassFactory";

(async () => {
  try {
    // Cargar los módulos dinámicos al iniciar el servidor
    await MyClassFactory.loadModules();
    console.log('Dynamic modules initialized');
  } catch (error) {
    console.error('Error during dynamic modules initialization:', error);
  }
})();