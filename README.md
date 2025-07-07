# Prueba Técnica: POKEDEX - BUSCADOR DE POKEMON

Una aplicación web moderna desarrollada en Angular que permite buscar y explorar información detallada sobre Pokémon utilizando la PokéAPI.

## REPOSITORIO

**GitHub:** https://github.com/MaARTCODE/pokemon-api

## RAMAS

- **main:** Contiene únicamente este README con la documentación del proyecto
- **develop:** Contiene todo el código fuente de la aplicación

Para acceder al código:
```bash
git clone https://github.com/MaARTCODE/pokemon-api.git
git checkout develop
```

## CARACTERÍSTICAS

- Busca cualquier Pokémon por nombre
- Muestra estadísticas, habilidades, tipos y movimientos
- Diseño glassmorphism con animaciones fluidas
- Guarda las últimas 5 búsquedas realizadas
- Optimizado para móviles, tablets y desktop
- Mensajes claros para diferentes tipos de errores

## TECNOLOGÍAS UTILIZADAS

- **Angular:** Framework principal
- **TypeScript:** Lenguaje de programación
- **Angular Material:** Componentes UI
- **RxJS:** Manejo de peticiones HTTP reactivas
- **PokéAPI:** API pública de Pokémon
- **CSS3:** Estilos modernos

## INSTALACIÓN

### Prerrequisitos:
- Node.js versión 18 o superior
- npm versión 9 o superior
- Angular CLI versión 20 o superior

### Pasos de instalación:

1. **Clonar el repositorio y cambiar a la rama de desarrollo**
   ```bash
   git clone https://github.com/MaARTCODE/pokemon-api.git
   cd pokemon-api
   git checkout develop
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar Angular Material**
   ```bash
   ng add @angular/material
   ```

4. **Instalar Angular Animations**
   ```bash
   npm install @angular/animations
   ```

## USO

### Desarrollo:
```bash
ng serve
```
La aplicación estará disponible en http://localhost:4200/

### Abrir automáticamente en el navegador:
```bash
ng serve -o
```

## ESTRUCTURA DEL PROYECTO

```
src/
├── app/
│   ├── componentes/
│   │   ├── busqueda-pokemon/           # Componente principal de búsqueda
│   │   │   ├── busqueda-pokemon.ts
│   │   │   ├── busqueda-pokemon.html
│   │   │   └── busqueda-pokemon.css
│   │   └── tarjeta-pokemon/            # Componente de visualización
│   │       ├── tarjeta-pokemon.ts
│   │       ├── tarjeta-pokemon.html
│   │       └── tarjeta-pokemon.css
│   ├── servicios/
│   │   └── pokemon.service.ts          # Servicio para API calls
│   ├── modelos/
│   │   └── pokemon.model.ts            # Interfaces de TypeScript
│   ├── app.component.ts                # Componente raíz
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.config.ts                   # Configuración de la app
│   └── app.routes.ts                   # Rutas básicas
├── main.ts                             # Punto de entrada
└── styles.css                         # Estilos globales
```

## FUNCIONALIDADES TÉCNICAS

### Componente Principal BusquedaPokemonComponent:
- Manejo de estado reactivo
- Validación de formularios
- Gestión de errores
- Historial de búsquedas con localStorage

### Servicio PokemonService:
- Peticiones HTTP
- Transformación de datos
- Manejo de errores
- Cache de búsquedas

### Componente Tarjeta TarjetaPokemonComponent:
- Visualización de datos del Pokémon
- Barras de progreso animadas
- Colores dinámicos por tipo
- Responsive

## API UTILIZADA

**PokéAPI:** https://pokeapi.co/api/v2/pokemon/{nombre}

### Datos consumidos:
- Nombre y especie
- Tipos (Fire, Water, etc.)
- Habilidades
- Movimientos (primeros 6)
- Estadísticas base
- Imagen oficial

## ESTADOS DE LA APLICACIÓN

1. **Estado inicial:** Formulario vacío listo para búsqueda
2. **Cargando:** Spinner animado durante la petición
3. **Éxito:** Mostrar datos del Pokémon encontrado
4. **Error:** Mensaje de error específico
5. **Historial:** Chips clicables de búsquedas anteriores

## REQUERIMIENTOS CUMPLIDOS

✅ Consumo de PokeAPI  
✅ Búsqueda por nombre  
✅ Visualización de datos estructurados  
✅ Interfaz responsiva e intuitiva  
✅ Manejo de errores  
✅ Mensajes informativos  

## FUNCIONALIDADES EXTRA

✅ Historial de búsquedas (localStorage)  
✅ Animaciones y transiciones  
✅ Diseño glassmorphism moderno  
✅ Validación de entradas  
✅ Estados de carga  
✅ Búsqueda con Enter  

## TIEMPO DE DESARROLLO

**Tiempo total:** +5 horas
- Configuración inicial: 30 min
- Desarrollo de componentes: 2 horas
- Estilos y responsive: 2.5 horas
- Testing y refinamiento: 30 min
