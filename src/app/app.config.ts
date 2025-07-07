// Configuración principal de la aplicación
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimización de detección de cambios
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Proveedor de rutas (aunque no las usemos mucho)
    provideRouter(routes),
    // Proveedor para hacer peticiones HTTP
    provideHttpClient()
  ]
};