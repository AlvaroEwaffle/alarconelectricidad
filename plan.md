# Plan de Desarrollo - Alarcón Electricidad Landing Page

## 📋 Resumen del Proyecto
**Empresa:** Alarcón Electricidad  
**Especialista:** Francisco Alarcón  
**Ubicación:** Talca, Región del Maule  
**Objetivo:** Conseguir más clientes nuevos  
**Tecnología:** Astro + Tailwind CSS  

## 🎨 Paleta de Colores
Implementar en `tailwind.config.mjs`:
- **Main:** #212121 (gris oscuro)
- **Hover:** #E53935 (rojo)
- **Details:** #FFD600 (amarillo)
- **Highlight:** #A2D2FF (azul claro para CTAs)
- **Background:** #E0E0E0 (gris claro para secciones intermedias)
- **Fondos principales:** Blancos
- **Texto en fondos oscuros:** Blanco (según preferencias del usuario)

## 📱 Información de Contacto
- **WhatsApp:** +56 9 3741 8142
- **Email:** alarcon1976suazo@gmail.com
- **Website:** www.alarconelectricidad.cl

## 🏗️ Estructura de la Landing Page

### 1. Hero Section (Above the fold)
- **Fondo animado** con puntos y figuras que se mueven suavemente
- **H1:** Título orientado al beneficio (10-12 palabras máx)
- **Subtítulo:** Refuerzo concreto (cómo lo haces + beneficio adicional)
- **CTA Principal:** "Agenda tu evaluación gratuita" (botón contrastante)
- **Prueba social:** Descripción de la empresa + certificación SEC

### 2. Bloque de Beneficios Clave
- 3-5 beneficios en formato bullet + icono
- Enfocados en resultados para el usuario
- Frases cortas y fáciles de escanear

### 3. Prueba Social
- Testimonios cortos con foto/nombre real
- Alternativamente: carrusel de logos de clientes

### 4. Sección Servicios (con Tabs)
**Tab 1: Instalaciones Domiciliarias**
- Instalación eléctrica nueva
- Instalación de luminarias
- Instalación de sistemas de climatización
- Instalación de enchufes y tomas eléctricas
- Cableado estructurado

**Tab 2: Reposición de Fallas y Cambio de Equipos**
- Diagnóstico de fallas eléctricas
- Reposición de cables y conductores eléctricos
- Cambio de tableros eléctricos
- Reposición de equipos de protección eléctrica
- Cambio de equipos eléctricos obsoletos

### 5. FAQs (Preguntas Frecuentes)
- 3-5 preguntas que respondan objeciones típicas
- Formato desplegable
- No alargar visualmente la página

### 6. CTA Final
- Repetir el CTA principal
- Mantener coherencia visual con el CTA inicial

### 7. Footer Minimalista
- Solo enlaces legales (privacidad, términos)
- Enlace discreto a home o redes

## 🧩 Componentes a Crear

### Componentes Principales
1. **Header** - Navegación limitada + CTA + Dropdown servicios
2. **Hero** - Sección principal con fondo animado
3. **Benefits** - Bloque de beneficios clave
4. **Testimonials** - Prueba social
5. **Services** - Sección de servicios con tabs
6. **FAQ** - Preguntas frecuentes desplegables
7. **ContactForm** - Formulario de contacto
8. **Footer** - Footer minimalista

### Componentes de Páginas de Servicios (Dinámicas)
- **ServicePage** - Página dinámica para cada servicio
- **ServiceCard** - Tarjeta individual de servicio

## 🛠️ Configuración Técnica

### Dependencias
```bash
npm create astro@latest
npm install @astrojs/tailwind
```

### Estructura de Archivos
```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Benefits.astro
│   ├── Testimonials.astro
│   ├── Services.astro
│   ├── FAQ.astro
│   ├── ContactForm.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── servicios/
│       └── [slug].astro
├── styles/
│   └── global.css
└── utils/
    └── services.ts
```

### Configuración Astro
- Usar `@astrojs/tailwind` oficial
- Implementar scroll suave
- Optimizar para velocidad < 2.5s
- Mobile-first design

## 📱 Optimizaciones

### Performance
- Velocidad de carga < 2.5s
- Optimización de imágenes
- Lazy loading
- Minificación de CSS/JS

### UX/UI
- Diseño mobile-first (>50% tráfico móvil)
- Un solo CTA contrastante y repetido
- Elementos de confianza cerca del momento de acción
- Buen contraste entre fondos y letras
- Uso de cards para componentes

### SEO
- Meta tags optimizados
- Estructura semántica HTML
- Alt text en imágenes
- Schema markup para servicios locales

## 🎯 Objetivos de Conversión
- **CTA Principal:** "Agenda tu evaluación gratuita"
- **Formulario mínimo:** 1-2 campos para conversión inicial
- **Elementos de confianza:** Certificación SEC, testimonios
- **Eliminar CTAs secundarios** para evitar distracciones

## 📋 Checklist de Desarrollo

### Fase 1: Setup y Estructura
- [ ] Crear proyecto Astro
- [ ] Instalar y configurar Tailwind
- [ ] Configurar paleta de colores
- [ ] Crear estructura de carpetas
- [ ] Implementar layout base

### Fase 2: Componentes Principales
- [ ] Header con navegación
- [ ] Hero section con animaciones
- [ ] Bloque de beneficios
- [ ] Sección de testimonios
- [ ] Servicios con tabs
- [ ] FAQ desplegable
- [ ] Formulario de contacto
- [ ] Footer

### Fase 3: Páginas Dinámicas
- [ ] Crear páginas de servicios individuales
- [ ] Implementar routing dinámico
- [ ] Optimizar para SEO

### Fase 4: Optimización y Deploy
- [ ] Optimizar performance
- [ ] Testing responsive
- [ ] Preparar para deploy
- [ ] Generar build de producción

## 🚀 Próximos Pasos
1. Inicializar proyecto Astro
2. Configurar Tailwind con paleta personalizada
3. Crear componentes base
4. Implementar animaciones de fondo
5. Desarrollar secciones principales
6. Crear páginas dinámicas de servicios
7. Optimizar y deployar
