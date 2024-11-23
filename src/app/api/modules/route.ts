import { NextResponse } from 'next/server';
import MyClassFactory from '@/app/factories/MyClassFactory';

export async function GET() {
  const modules = MyClassFactory.loadModules();

  return NextResponse.json({
    success: true,
    modules: Object.keys(modules), // Devuelve los nombres de los módulos cargados
  });
}