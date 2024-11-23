# Usa una imagen base con Node.js 22
FROM node:22-alpine

# Instala pnpm globalmente
RUN npm install -g pnpm

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY package.json pnpm-lock.yaml ./

# Instala dependencias de producción
RUN pnpm install --frozen-lockfile --prod

# Copia todo excepto dynamic-modules (se usará un volumen para esto)
COPY . .

# Genera el build de producción
RUN pnpm build

# Expone el puerto de la app
EXPOSE 3000

# Inicia la aplicación
CMD ["pnpm", "start"]
