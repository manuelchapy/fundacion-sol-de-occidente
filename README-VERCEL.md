# Guía de Despliegue en Vercel - Fundación Sol de Occidente

## 📋 Archivos de Configuración Creados/Actualizados

### 1. `vercel.json` - Configuración principal de Vercel
- Framework: Next.js
- Comandos de build, dev e install
- Headers de seguridad
- Redirecciones
- Configuración de funciones serverless

### 2. `.vercelignore` - Archivos a excluir del despliegue
- node_modules
- archivos de desarrollo
- logs y archivos temporales
- archivos de IDE

### 3. `next.config.js` - Configuración optimizada de Next.js
- Optimizaciones para producción
- Configuración de imágenes
- Headers de seguridad
- Configuración para Vercel

### 4. `env.example` - Variables de entorno de ejemplo
- Configuración de la aplicación
- Datos de contacto
- Redes sociales
- APIs externas

### 5. `package.json` - Scripts actualizados
- Agregado script `vercel-build`
- Script `export` para generación estática

## 🚀 Pasos para Desplegar en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Fundación Sol de Occidente"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/fundacion-sol-de-occidente.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configura las variables de entorno:**
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Agrega las variables necesarias basándote en `env.example`

### Opción 2: Despliegue desde CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

4. **Para producción:**
   ```bash
   vercel --prod
   ```

## ⚙️ Configuración Adicional Recomendada

### Variables de Entorno en Vercel
Configura estas variables en el dashboard de Vercel:

```env
NEXT_PUBLIC_APP_NAME=Fundación Sol de Occidente
NEXT_PUBLIC_APP_DESCRIPTION=Fundación dedicada al desarrollo social y comunitario
NEXT_PUBLIC_CONTACT_EMAIL=contacto@fundacionsoldeoccidente.org
NEXT_PUBLIC_CONTACT_PHONE=+58-XXX-XXXXXXX
```

### Dominio Personalizado (Opcional)
1. Ve a Settings > Domains en Vercel
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel

## 🔧 Optimizaciones Incluidas

- **Compresión gzip** habilitada
- **Headers de seguridad** configurados
- **Cache de archivos estáticos** optimizado
- **Imágenes optimizadas** con WebP y AVIF
- **Bundle splitting** automático
- **Configuración de CORS** para APIs

## 📊 Monitoreo y Analytics

Para agregar Google Analytics:
1. Obtén tu Measurement ID de Google Analytics
2. Agrega la variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` en Vercel
3. El código ya está preparado para usar esta variable

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Despliegue en Vercel
vercel

# Despliegue en producción
vercel --prod
```

## 📝 Notas Importantes

- El proyecto está configurado para usar el App Router de Next.js 14
- Las imágenes se optimizan automáticamente
- Los archivos estáticos se cachean por 1 año
- La configuración incluye headers de seguridad básicos
- El proyecto es compatible con SSR y SSG

## 🆘 Solución de Problemas

### Error de Build
- Verifica que todas las dependencias estén en `package.json`
- Revisa que no haya errores de TypeScript
- Ejecuta `npm run build` localmente para probar

### Variables de Entorno
- Asegúrate de que las variables estén configuradas en Vercel
- Las variables que empiezan con `NEXT_PUBLIC_` son visibles en el cliente
- Las demás son solo del servidor

### Dominio Personalizado
- Verifica la configuración de DNS
- Espera hasta 24 horas para la propagación completa
- Usa `vercel domains ls` para verificar el estado

¡Tu proyecto está listo para desplegarse en Vercel! 🎉
