// src/app/page.tsx
import MyClassFactory from "@/app/factories/MyClassFactory";

export default async function Page() {
  const loadedClasses = await MyClassFactory.registeredClasses
  console.log(loadedClasses);
  // Aquí puedes cargar los datos directamente en el componente
  // try {
  //   await MyClassFactory.loadModules();  // Cargar dinámicamente las clases
  //   console.log('Dynamic modules loaded successfully.');
  // } catch (error) {
  //   console.error('Error loading dynamic modules:', error);
  // }

  // El componente renderiza el contenido después de cargar los datos
  return (
    <div>
      <h1>Dynamic Modules Loaded</h1>
    </div>
  );
}
